import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dto/CreateUserDTO';

@Injectable()
export class AuthService {
  register(user: CreateUserDTO) {}
}
