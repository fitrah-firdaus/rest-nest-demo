import { Injectable } from '@nestjs/common';
import { User } from './users.interface';
import { v4 as uuid } from 'uuid'; // For generating unique IDs

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  create(user: Partial<User>): User {
    const newUser: User = { id: uuid(), ...user } as User;
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, updatedUser: Partial<User>): User | undefined {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return undefined;
    this.users[index] = { ...this.users[index], ...updatedUser };
    return this.users[index];
  }

  delete(id: string): User | undefined {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return undefined;
    const [deletedUser] = this.users.splice(index, 1);
    return deletedUser;
  }
}
