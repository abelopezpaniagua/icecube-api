import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

import { User } from '../models/user.entity';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this._usersService.findAll();
  }

  //TODO: Improve this part, instead of manually using express, just create a handler for all kind of requests and based on a result type, just return or throw ex
  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const user = await this._usersService.findOne(id);

    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).send('User not found');
    }

    return res.status(HttpStatus.OK).json(user);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() user: User): Promise<User> {
    return await this._usersService.create(user);
  }

  //TODO: Improve this part, instead of manually using express, just create a handler for all kind of requests and based on a result type, just return or throw ex
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() user: User,
    @Res() res: Response,
  ) {
    const updatedUser = await this._usersService.update(id, user);

    if (!updatedUser) {
      return res.status(HttpStatus.NOT_FOUND).send('User not found');
    }

    return res.status(HttpStatus.OK).json(updatedUser);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: number): Promise<void> {
    await this._usersService.delete(id);
  }
}
