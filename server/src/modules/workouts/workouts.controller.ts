import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { AddExerciseDto, CreateWorkoutDto } from './dto/create-workout.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutService: WorkoutsService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createWorkout(@Body() dto: CreateWorkoutDto) {
    return this.workoutService.createWorkout(dto);
  }
  @Post(':id/exercises')
  @HttpCode(HttpStatus.CREATED)
  addExerciseToWorkout(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: AddExerciseDto,
  ) {
    return this.workoutService.addExerciseToWorkout(id, body.exercise_id);
  }
}
