import { Controller } from '@nestjs/common';

@Controller('exercises')
export class ExercisesController {}

// each exercise will have following fields for ex:
// name: "pull ups"
// targetMuscle: "Back"
// id: should i make this depend on workout so an exercise can have same id in different workouts i'm not sure
// controllers/id to get exercise
