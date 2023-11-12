import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async createOne(email: string, password: string, role: Role): Promise<User> {
    const salt = 12;
    const hash = bcrypt.hashSync(password, salt);
    const user = this.usersRepository.create({
      email,
      password: hash,
      role,
    });
    await this.usersRepository.insert(user);
    return user;
  }
}
