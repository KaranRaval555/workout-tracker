import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  signUp(@Body() user: CreateUserDto) {
    return this.authService.signUp(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }
}
