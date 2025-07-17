import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegistroEmocional } from './entities/registro-emocional.entity';

@Injectable()
export class RegistroEmocionalService {
  constructor(
    @InjectRepository(RegistroEmocional)
    private readonly registroRepo: Repository<RegistroEmocional>,
  ) {}

  async create(data: Partial<RegistroEmocional>) {
    const registro = this.registroRepo.create(data);
    return this.registroRepo.save(registro);
  }

  async findByCliente(clienteId: number) {
    return this.registroRepo.find({ where: { cliente_id: clienteId } });
  }

  async findByPareja(parejaId: number) {
    return this.registroRepo.find({ where: { pareja_id: parejaId } });
  }

  prepararTextoParaAnalisis(texto: string) {
    return texto.trim();
  }
} 