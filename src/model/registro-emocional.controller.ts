import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { RegistroEmocionalService } from './registro-emocional.service';

@Controller('registros')
export class RegistroEmocionalController {
  constructor(private readonly registroService: RegistroEmocionalService) {}

  @Post()
  create(@Body() data: any) {
    return this.registroService.create(data);
  }

  @Get(':clienteId')
  findByCliente(@Param('clienteId') clienteId: string) {
    return this.registroService.findByCliente(Number(clienteId));
  }
} 