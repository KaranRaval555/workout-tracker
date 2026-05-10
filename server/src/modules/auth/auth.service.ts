import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(
    private authRepo: AuthRepository,
    private jwtService: JwtService,
  ) {}
  async signUp(user: CreateUserDto) {
    const hashed = await bcrypt.hash(user.password, 10);
    await this.authRepo.create({
      ...user,
      password: hashed,
    });
    return { message: 'User account created successfully' };
  }
  async login({ key, password }: LoginDto) {
    const user = await this.authRepo.findByKey(key);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}
