import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async testJwt(): Promise<{ token: string }> {
    return this.appService.testJwt()

  }
}
