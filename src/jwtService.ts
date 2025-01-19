import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';

@Injectable()
export class JwtService {
  constructor(private readonly nestJwtService: NestJwtService) {}

  async generateToken(user: any) {
    const payload = { sub: user.id, email: user.email };
    return this.nestJwtService.sign(payload);
  }

  async verifyToken(token: string) {
    return this.nestJwtService.verify(token);
  }
}