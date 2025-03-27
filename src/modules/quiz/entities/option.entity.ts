import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Question } from './question.entity';

@Entity('options')
export class Option extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  text: string;

  @Column({ type: 'boolean' })
  isCorrect: boolean;
  @ManyToOne(() => Question, (question) => question.options)
  question: Question[];
}
