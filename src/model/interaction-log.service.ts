import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InteractionLog } from './entities/interaction-log.entity';

@Injectable()
export class InteractionLogService {
  constructor(
    @InjectRepository(InteractionLog)
    private readonly interactionRepo: Repository<InteractionLog>,
  ) {}

  async create(data: Partial<InteractionLog>) {
    const interaction = this.interactionRepo.create(data);
    return this.interactionRepo.save(interaction);
  }

  async findRecentByCouple(coupleId: number) {
    return this.interactionRepo.find({
      where: { couple_id: coupleId },
      order: { interaction_date: 'DESC' },
      take: 10,
    });
  }

  async filterByTypeOrEmotion(coupleId: number, type?: string, emotion?: string) {
    const where: any = { couple_id: coupleId };
    if (type) where.interaction_type = type;
    if (emotion) where.my_emotion_in_interaction = emotion;
    return this.interactionRepo.find({ where });
  }
} 