import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AppService {
  constructor(
    private readonly jwtService: JwtService
  ) {}

  async testJwt(): Promise<{ token: string }> {
    const token = await this.jwtService.signAsync({
      data: { email: 'java', role: '2' }
    });

    return { token };
  }
}
