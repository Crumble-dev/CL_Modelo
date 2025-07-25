import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { envs } from './model/config/envs';
import { InteractionLog } from './model/entities/interaction-log.entity'
import { RegistroEmocional } from './model/entities/registro-emocional.entity'
import { ModelModule } from './model/model.module'


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envs.database.host,
      port: envs.database.port,
      username: envs.database.username,
      password: envs.database.password,
      database: envs.database.database,
      entities: [
        InteractionLog,
        RegistroEmocional
      ],
      synchronize: true, // Solo para desarrollo
      //dropSchema: true,
    }),
    ModelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
