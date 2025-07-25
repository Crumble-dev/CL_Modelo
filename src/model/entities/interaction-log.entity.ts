import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum InteractionType {
  CONFLICTO = 'CONFLICTO',
  CONVERSACION_DE_APOYO = 'CONVER_DE_APOYO',
  CONVERSACION_CASUAL = 'CONVER_CASUAL',
  CONVERSACION_INTIMA = 'CONVER_INTIMA',
  ACTIVIDAD_COMPARTIDA = 'ACTIVIDAD_COMPARTIDA',
  MOMENTO_AFECTUOSO = 'MOMENTO_AFECTUOSO',
  DESICION_PRACTICA = 'DESICION_PRACTICA',
  OTRO = 'OTRO',
}



export enum CommunicationStyle {
  ASERTIVO = 'ASERTIVO',
  PASIVO = 'PASIVO',
  AGRESIVO = 'AGRESIVO',
  PASIVO_AGRESIVO = 'PASIVO_AGRESIVO',
  DIRECTO_Y_CLARO = 'DIRECTO_Y_CLARO',
  SARCASTICO_O_IRONICO = 'SARCASTICO_O_IRONICO',
  RETRAIDO_O_SILENCIOSO = 'RETRAIDO_O_SILENCIOSO',
}


export enum PhysicalContact {
  SIN_CONTACTO = 'SIN_CONTACTO',
  CONTACTO_LIGERO = 'CONTACTO_LIGERO',
  CONTACTO_MODERADO = 'CONTACTO_MODERADO',
  CONTACTO_INTIMO = 'CONTACTO_ÍNTIMO',
  AFECTUOSO = 'AFECTUOSO',
  RUTINA = 'RUTINA',
  TENSO_O_DISTANTE = 'TENSO_O_DISTANTE',
  AUSENTE = 'AUSENTE',
  AGRESIVO = 'AGRESIVO',
}



@Entity('interaction_logs')
export class InteractionLog {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  reporter_client_id: number;

  @Column()
  couple_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  interaction_date: Date;

  @Column('text')
  interaction_description: string;

  @Column({ type: 'enum', enum: InteractionType })
  interaction_type: InteractionType;

  @Column({ type: 'enum', enum: CommunicationStyle, nullable: true })
  my_communication_style?: CommunicationStyle;

  @Column({ type: 'enum', enum: CommunicationStyle, nullable: true })
  perceived_partner_communication_style?: CommunicationStyle;

  @Column({ type: 'enum', enum: PhysicalContact, nullable: true })
  physical_contact_level?: PhysicalContact;

  @Column({ type: 'varchar', length: 100 })
  my_emotion_in_interaction: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  perceived_partner_emotion?: string;
} 