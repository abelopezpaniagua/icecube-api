import { Injectable } from '@nestjs/common';

import { DataSource } from 'typeorm';

import { User } from '../models/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly _dataSource: DataSource) {}

  /**
   * Find all users
   * @returns Promise<User[]>
   */
  async findAll(): Promise<User[]> {
    return await this._dataSource.getRepository(User).find();
  }

  /**
   * Find one user by id
   * @param id - User id
   * @returns Promise<User | null>
   */
  async findOne(id: number): Promise<User | null> {
    return await this._dataSource.getRepository(User).findOneBy({ id });
  }

  /**
   * Create a new user
   * @param user - User object
   * @returns Promise<User>
   */
  async create(user: User): Promise<User> {
    return await this._dataSource.getRepository(User).save(user);
  }

  /**
   * Update a user by id
   * @param id - User id
   * @param user - User object
   * @returns Promise<User | null>
   */
  async update(id: number, user: User): Promise<User | null> {
    const repository = this._dataSource.getRepository(User);
    const result = await repository.update(id, user);

    if (result.affected === 0) {
      throw new Error('Cannot update user ');
    }

    return await repository.findOneBy({ id });
  }

  /**
   * Delete a user by id
   * @param id - User id
   * @returns Promise<void>
   */
  async delete(id: number): Promise<void> {
    await this._dataSource.getRepository(User).delete(id);
  }
}
