import { Body, Controller, Param, Post } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutService: WorkoutsService) {}
  @Post()
  createWorkout(@Body() dto: CreateWorkoutDto) {
    return this.workoutService.createWorkout(dto);
  }
  @Post(':id/exercises')
  addExerciseToWorkout(
    @Param('id') id: string,
    @Body() body: { exercise_id: number },
  ) {
    return this.workoutService.addExerciseToWorkout(
      Number(id),
      body.exercise_id,
    );
  }
}
