import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { InteractionLogService } from './interaction-log.service';

@Controller('interacciones')
export class InteractionLogController {
  constructor(private readonly interactionService: InteractionLogService) {}

  @Post()
  create(@Body() data: any) {
    return this.interactionService.create(data);
  }

  @Get(':parejaId')
  findRecentByCouple(@Param('parejaId') parejaId: string, @Query('type') type?: string, @Query('emotion') emotion?: string) {
    if (type || emotion) {
      return this.interactionService.filterByTypeOrEmotion(Number(parejaId), type, emotion);
    }
    return this.interactionService.findRecentByCouple(Number(parejaId));
  }
} 