import { HttpCode, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { DB_CONN } from 'src/modules/db/db.module';
import { Workout } from 'src/types/types';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(@Inject(DB_CONN) private db: Pool) {}
  @HttpCode(HttpStatus.CREATED)
  async createWorkout(workout: CreateWorkoutDto) {
    await this.db.query<Workout>(
      `INSERT INTO workouts(name) values ($1) RETURNING *`,
      [workout.name],
    );
    return { message: 'Workout added' };
  }
  @HttpCode(HttpStatus.CREATED)
  async addExerciseToWorkout(workoutId: number, exerciseId: number) {
    await this.db.query(
      `INSERT INTO workout_exercises(workout_id, exercise_id) values ($1, $2)`,
      [workoutId, exerciseId],
    );
    return { message: 'Exercise added to workout' };
  }
}
