import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): string {
    return this.usersService.getAllUsers();
  }
}
