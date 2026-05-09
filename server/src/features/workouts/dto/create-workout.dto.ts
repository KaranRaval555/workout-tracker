import { IsString, Length } from 'class-validator';

export class CreateWorkoutDto {
  @IsString()
  @Length(1, 100)
  name: string;
}
