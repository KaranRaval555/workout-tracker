import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';
import { ExercisesModule } from './modules/exercises/exercises.module';

@Module({
  imports: [AuthModule, WorkoutsModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
