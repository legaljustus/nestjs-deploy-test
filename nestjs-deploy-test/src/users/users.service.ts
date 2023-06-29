import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find();
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { userId: userId },
    });
    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return user;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    await this.userRepository.update(id, updateUserInput);
    return this.findOne(id);
  }

  async remove(id: string) {
    const userToRemove = await this.findOne(id);
    const result = await this.userRepository.remove(userToRemove);
    return result;
  }
}
