import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/RegisterUser.dto';
import { SETTINGS } from 'src/app.utils';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async doUserRegisteration(
    @Body(SETTINGS.VALIDATION_PIPE)
    userRegisterationDto: RegisterUserDto,
  ): Promise<User> {
    return await this.userService.doUserRegisteration(userRegisterationDto);
  }
}
