import { Controller, Get, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "HELLOOOO this is get";
  }

  @Delete()
  postingTest(): string {
    return "HELLOOOO this is delete";  }
}
