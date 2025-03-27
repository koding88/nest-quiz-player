import { InjectRepository } from '@nestjs/typeorm';
import { Option } from '../entities/option.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateOptionDto } from '../dto/CreateOption.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option) private optionRepository: Repository<Option>,
  ) {}
  async createOption(option: CreateOptionDto, question: Question) {
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    question.options = [...question.options, newOption];
    await question.save();

    return newOption;
  }
}
