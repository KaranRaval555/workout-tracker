import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { WorkoutsModule } from './features/workouts/workouts.module';

@Module({
  imports: [AuthModule, WorkoutsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
