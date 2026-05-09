import { Module } from '@nestjs/common';
import { ExercisesController } from './exercises.controller';
import { DatabaseModule } from 'src/modules/db/db.module';
import { ExercisesService } from './exercises.service';

@Module({
  controllers: [ExercisesController],
  imports: [DatabaseModule],
  providers: [ExercisesService],
})
export class ExercisesModule {}
