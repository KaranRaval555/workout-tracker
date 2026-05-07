import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { DB_CONN } from 'src/modules/db/db.module';

type Workout = {
  id: number;
  name: string;
  workout_date: Date;
};

@Injectable()
export class WorkoutsService {
  constructor(@Inject(DB_CONN) private db: Pool) {}
  async createWorkout(name: { name: string }): Promise<Workout> {
    const result = await this.db.query(
      `INSERT INTO workouts(name) values ($1) RETURNING *`,
      [name],
    );
    return result.rows[0];
  }
}
