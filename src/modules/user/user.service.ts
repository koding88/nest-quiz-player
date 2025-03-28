import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from './dto/RegisterUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async doUserRegisteration(
    userRegisterationDto: RegisterUserDto,
  ): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: userRegisterationDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const user = new User();
    user.name = userRegisterationDto.name;
    user.email = userRegisterationDto.email;
    user.password = userRegisterationDto.password;

    return await this.userRepository.save(user);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
