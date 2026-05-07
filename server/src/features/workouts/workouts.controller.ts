import { Body, Controller, Post } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutService: WorkoutsService) {}
  @Post()
  createWorkout(@Body() body: { name: string }) {
    return this.workoutService.createWorkout(body);
  }
}
