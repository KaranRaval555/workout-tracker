import { Module } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { WorkoutsController } from './workouts.controller';
import { WorkoutsRepository } from './workouts.repository';

@Module({
  controllers: [WorkoutsController],
  providers: [WorkoutsService, WorkoutsRepository],
})
export class WorkoutsModule {}
