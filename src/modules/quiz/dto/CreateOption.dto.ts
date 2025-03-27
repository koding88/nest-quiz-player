import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  @Length(2, 255)
  text: string;

  @IsNotEmpty()
  isCorrect: boolean;

  @IsNotEmpty()
  questionId: number;
}
