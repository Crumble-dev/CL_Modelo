import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroEmocionalService } from './registro-emocional.service';
import { RegistroEmocionalController } from './registro-emocional.controller';
import { InteractionLogService } from './interaction-log.service';
import { InteractionLogController } from './interaction-log.controller';
import { RegistroEmocional } from './entities/registro-emocional.entity';
import { InteractionLog } from './entities/interaction-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroEmocional, InteractionLog])],
  controllers: [RegistroEmocionalController, InteractionLogController],
  providers: [RegistroEmocionalService, InteractionLogService],
})
export class ModelModule {}
