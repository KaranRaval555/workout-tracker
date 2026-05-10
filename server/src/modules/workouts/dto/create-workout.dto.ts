import { IsInt, IsString, Length } from 'class-validator';

export class CreateWorkoutDto {
  @IsString()
  @Length(1, 100)
  name: string;
}

export class AddExerciseDto {
  @IsInt()
  exercise_id: number;
}
