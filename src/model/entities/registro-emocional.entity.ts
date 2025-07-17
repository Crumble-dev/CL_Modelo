import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('registros_emocionales')
export class RegistroEmocional {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  cliente_id: number;

  @Column()
  pareja_id: number;

  @Column({ type: 'timestamp' })
  fecha_registro: Date;

  @Column('text')
  situacion: string;

  @Column('text')
  pensamiento: string;

  @Column({ type: 'varchar', length: 100 })
  emocion: string;

  @Column({ type: 'text', nullable: true })
  sensacion_fisica?: string;

  @Column({ type: 'text', nullable: true })
  conducta?: string;

  @Column({ type: 'tinyint', nullable: true })
  nivel_estres?: number;

  @Column({ type: 'float', nullable: true })
  calidad_sueno_horas?: number;
} 