import { Inject, Injectable } from '@nestjs/common';
import { DB_CONN } from '../db/db.module';
import { Pool } from 'pg';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/types/types';

@Injectable()
export class AuthRepository {
  constructor(@Inject(DB_CONN) private db: Pool) {}
  async create({ username, email, password }: CreateUserDto) {
    await this.db.query<User>(
      'INSERT INTO users (username, email, password) values($1, $2, $3)',
      [username, email, password],
    );
  }
  // create indexes on email and username
  async findByKey(key: string) {
    const result = await this.db.query<User>(
      'SELECT * from users where email=$1 or username=$1',
      [key],
    );
    return result.rows[0];
  }
}
