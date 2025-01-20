import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, CreateUserSchema } from './dto/create-user.dto';
import { LoginUserDto, LoginUserSchema } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  @Post('signup')
  async signUp(@Body() body: CreateUserDto) {
    const result = CreateUserSchema.safeParse(body);
    if (!result.success) {
      throw new BadRequestException(result.error.format());
    }

    return this.usersService.create(result.data as CreateUserDto);
  }

  @Post('login')
  async login(@Body() body: LoginUserDto) {
    const result = LoginUserSchema.safeParse(body);
    if (!result.success) {
      throw new BadRequestException(result.error.format());
    }

    const { email, password } = result.data;
    const user = await this.usersService.findOneByEmail(email);

    if (
      !user ||
      !(await this.usersService.comparePassword(password, user.password))
    ) {
      throw new BadRequestException('Invalid email or password');
    }
    const jwtSecret = this.configService.get('JWT_SECRET');
    const payload = { sub: user.id };
    const access_token = this.jwtService.sign(payload, { secret: jwtSecret });
    const userData = {
      email: user.email,
      name: user.name,
      id: user.id,
      access_token,
    };
    return {
      user: userData,
    };
  }
}
