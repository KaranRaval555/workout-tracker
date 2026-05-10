import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  key: string;

  @IsString()
  @Length(1, 100)
  password: string;
}
