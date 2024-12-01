import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/CreateUserDTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() user: CreateUserDTO) {
    this.userService.create(user);
  }

  @Get('all')
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  cgetByEmail(@Param('id') id: string) {
    return this.userService.getById(id);
  }
}
