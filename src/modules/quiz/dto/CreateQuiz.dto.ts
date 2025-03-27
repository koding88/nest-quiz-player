import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Title is required' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({ message: 'Description is required' })
  @Length(3, 255)
  description: string;
}
