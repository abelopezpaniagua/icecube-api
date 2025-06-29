import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getInformation(): string {
    return 'Icecube API v1.0.0';
  }
}
