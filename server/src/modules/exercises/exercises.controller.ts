import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createExercise(@Body() dto: CreateExerciseDto) {
    return this.exercisesService.createExercise(dto);
  }
}
