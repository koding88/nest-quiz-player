import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './controllers/quiz.controller';
import { QuestionController } from './controllers/question.controller';
import { QuizService } from './services/quiz.service';
import { QuestionService } from './services/question.service';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
