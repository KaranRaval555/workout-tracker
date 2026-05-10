import { Inject, Injectable } from '@nestjs/common';
import { DB_CONN } from '../db/db.module';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { Pool } from 'pg';
import { Workout } from 'src/types/types';

@Injectable()
export class WorkoutsRepository {
  constructor(@Inject(DB_CONN) private db: Pool) {}
  async create(workout: CreateWorkoutDto) {
    const result = await this.db.query<Workout>(
      `INSERT INTO workouts(name) values ($1) RETURNING *`,
      [workout.name],
    );
    return result.rows[0];
  }
  async addExerciseToWorkout(workoutId: number, exerciseId: number) {
    await this.db.query(
      `INSERT INTO workout_exercises(workout_id, exercise_id) values ($1, $2)`,
      [workoutId, exerciseId],
    );
  }
}
