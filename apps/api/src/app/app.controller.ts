import { Controller, Get, Inject, CACHE_MANAGER } from '@nestjs/common';

import { Message } from '@ng-nest/api-interfaces';
import Cache from 'cache-manager';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache{},
  ) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
