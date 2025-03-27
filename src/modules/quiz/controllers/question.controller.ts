import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dto/CreateQuestion.dto';
import { QuestionService } from '../services/question.service';
import { Question } from '../entities/question.entity';
import { QuizService } from '../services/quiz.service';

@Controller('questions')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}
  @Post('')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getQuizById(question.quizId);
    if (!quiz) {
      throw new Error(`Quiz with id ${question.quizId} not found`);
    }
    return await this.questionService.createQuestion(question, quiz);
  }
}
