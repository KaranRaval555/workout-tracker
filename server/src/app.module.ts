import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { WorkoutsModule } from './features/workouts/workouts.module';
import { ExercisesModule } from './features/exercises/exercises.module';

@Module({
  imports: [AuthModule, WorkoutsModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
