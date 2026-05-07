import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Pool } from 'pg';
import { CreateUserDto } from './dto/create-user.dto';
import { DB_CONN } from '../db/db.module';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';

type User = {
  username: string;
  email: string;
  id: number;
  password: string;
  created_at: Date;
  last_login?: Date;
};

@Injectable()
export class AuthService {
  constructor(
    @Inject(DB_CONN) private db: Pool,
    private jwtService: JwtService,
  ) {}
  async signUp(user: CreateUserDto) {
    const { username, email, password } = user;
    const hashed = await bcrypt.hash(password, 10);
    const result = await this.db.query<User>(
      'INSERT INTO users (username, email, password) values($1, $2, $3) RETURNING *',
      [username, email, hashed],
    );
    return result.rows[0];
  }
  async login({ username, email, password }: UpdateUserDto) {
    if (!username && !email) {
      throw new Error('Either username or email should be provided');
    }
    if (!password) {
      throw new Error('Password must given');
    }
    const result = await this.db.query<User>(
      'SELECT * from users where email=$1 or username=$2',
      [email, username],
    );
    const user = result.rows[0];
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isValid = await bcrypt.compare(password, user.password);
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = this.jwtService.sign(payload, {
      secret: process.env.SECRET_KEY,
    });
    return { access_token: token };
  }
}
