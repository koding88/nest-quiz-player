import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Quiz } from './quiz.entity';
import { Option } from './option.entity';

@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  question: string;
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;
  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
