import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async testJwt(): Promise<{ token: string }> {
    return this.appService.testJwt()
  }


  @UseGuards(JwtGuard)
  @Get('users')
  async getAllUser(): Promise<any> {
    const user = [
      {name: 'java', do: 'does' }
    ];
    return user; 
  }
}
