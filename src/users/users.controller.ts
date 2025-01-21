import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ConfigService } from '@nestjs/config';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
  ) {}

  @Post('signup')
  async signUp(@Body() body: CreateUserDto) {
    const user = await this.usersService.create(body);
    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    const session = await this.usersService.createSession(user.id, jwtSecret);

    return {
      user: {
        email: user.email,
        name: user.name,
        id: user.id,
        access_token: session.accessToken,
      },
    };
  }

  @Post('login')
  async login(@Body() body: LoginUserDto) {
    const user = await this.usersService.findOneByEmail(body.email);
    if (
      !user ||
      !(await this.usersService.comparePassword(body.password, user.password))
    ) {
      throw new BadRequestException('Invalid email or password');
    }

    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    const session = await this.usersService.createSession(user.id, jwtSecret);

    return {
      user: {
        email: user.email,
        name: user.name,
        id: user.id,
        access_token: session.accessToken,
      },
    };
  }
}
