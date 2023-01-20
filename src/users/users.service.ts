import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'Marcus' }];

  findAll(name) {
    if (!name) return this.users;
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  findByQuery(name: string): User {
    return this.users.find((user) => user.name === name);
  }

  createUser(CreateUserDto: CreateUserDto): { msg: string; user: User } {
    this.users.push({ id: this.users.length, ...CreateUserDto });
    return {
      msg: 'Successfully created',
      user: this.users.find((user) => user.name === CreateUserDto.name),
    };
  }
}
