import { Module } from '@nestjs/common';
import { Pool } from 'pg';

export const DB_CONN = 'DB';

const dbProvider = {
  provide: DB_CONN,
  useValue: new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'workout_tracker',
  }),
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DatabaseModule {}
