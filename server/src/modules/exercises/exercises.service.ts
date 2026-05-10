import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { ExercisesRepository } from './exercises.repository';

@Injectable()
export class ExercisesService {
  constructor(private exercisesRepo: ExercisesRepository) {}
  async createExercise(exercise: CreateExerciseDto) {
    await this.exercisesRepo.create(exercise);
    return { message: 'Exercise added' };
  }
}
