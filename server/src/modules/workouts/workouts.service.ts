import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { WorkoutsRepository } from './workouts.repository';

@Injectable()
export class WorkoutsService {
  constructor(private workoutsRepo: WorkoutsRepository) {}
  async createWorkout(workout: CreateWorkoutDto) {
    return this.workoutsRepo.create(workout);
  }
  async addExerciseToWorkout(workoutId: number, exerciseId: number) {
    await this.workoutsRepo.addExerciseToWorkout(workoutId, exerciseId);
    return { message: 'Exercise added to workout' };
  }
}
