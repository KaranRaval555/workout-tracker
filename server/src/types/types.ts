export type Workout = {
  id: number;
  name: string;
};

export type Exercise = {
  id: number;
  name: string;
  target_muscle: string;
};

export type User = {
  username: string;
  email: string;
  id: number;
  password: string;
  created_at: Date;
  last_login?: Date;
};

export type Message = {
  message: string;
};
