import { Inject, Injectable } from '@nestjs/common';
import { DB_CONN } from '../db/db.module';
import { Pool } from 'pg';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Exercise } from 'src/types/types';

@Injectable()
export class ExercisesRepository {
  constructor(@Inject(DB_CONN) private db: Pool) {}
  async create(exercise: CreateExerciseDto) {
    await this.db.query<Exercise>(
      `INSERT INTO exercises(name, target_muscle) values($1, $2) RETURNING *`,
      [exercise.name, exercise.target_muscle],
    );
  }
}
