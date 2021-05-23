import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from './user.entity';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(data: IUser): Promise<User> {
    const err = [];
    const { email, phone, name } = data;

    const dup = await this.usersRepository.find({
      where: [{ name }, { email }, { phone }],
    });

    if (!dup?.length) return this.usersRepository.save(data);

    dup.forEach((item) =>
      ['phone', 'email', 'name'].forEach((a) => {
        if (item[a] === data[a]) return err.push(`${a} already exist`);
      }),
    );
    throw new NotFoundException(err);
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async update(id: number, data: IUser): Promise<User> {
    if (!(await this.findOne(id))) {
      throw new NotFoundException(`The user with the id ${id} does not exitst`);
    }

    this.usersRepository.update(id, data);
    return this.findOne(id);
  }
}
