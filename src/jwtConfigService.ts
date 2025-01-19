import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtConfigService {
  private secret: string;

  constructor() {
    this.secret = process.env.JWT_SECRET;
  }

  getSecret(): string {
    return this.secret;
  }
}
