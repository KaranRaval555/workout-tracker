import { HttpCode, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { DB_CONN } from 'src/modules/db/db.module';
import { Exercise } from 'src/types/types';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(@Inject(DB_CONN) private db: Pool) {}
  @HttpCode(HttpStatus.CREATED)
  async createExercise(exercise: CreateExerciseDto) {
    await this.db.query<Exercise>(
      `INSERT INTO exercises(name, target_muscle) values($1, $2) RETURNING *`,
      [exercise.name, exercise.target_muscle],
    );
    return { message: 'Exercise added' };
  }
}
