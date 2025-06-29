import { Entity } from 'typeorm';

@Entity('users')
export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
