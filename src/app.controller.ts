import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles, ROLES } from './decorators/roles.decorator';
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
import { RolesGuard } from './guards/roles.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async testJwt(): Promise<{ token: string }> {
    return this.appService.testJwt()
  }

  @Roles(ROLES.ADMIN)
  @UseGuards(JwtGuard, RolesGuard)
  @Get('users')
  async getAllUser(): Promise<any> {
    const user = [
      {name: 'java', do: 'does' }
    ];
    return user; 
  }
}
