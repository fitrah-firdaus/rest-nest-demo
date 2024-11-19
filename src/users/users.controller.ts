import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.interface';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: Partial<User>): User {
    return this.usersService.create(user);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatedUser: Partial<User>,
  ): User | undefined {
    return this.usersService.update(id, updatedUser);
  }

  @Delete(':id')
  delete(@Param('id') id: string): User | undefined {
    return this.usersService.delete(id);
  }
}
