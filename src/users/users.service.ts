import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  /*private readonly users = [
    {
      userId: 1,
      username: 'harshit',
      password: 'mathur',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];*/

  /*async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }*/

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }

  async findOne(username){
    const user=await this.userModel.findOne({username:username})
    return user;
  }
}
