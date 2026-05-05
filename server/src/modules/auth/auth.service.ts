import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  signUp(user: CreateUserDto) {
    // make insert query to filll user data into
    // database use drizzle btw
  }
  async login() {
    // idk how this goes but
    // essentially we are comparing password has with the one stored in the database
    // on sucess we will send generated jwt key
    // along with the response which will then be
    // stored inside client's browser
  }
}
