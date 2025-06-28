import { User } from 'src/modules/users/models/user.entity';
import { EntitySchema } from 'typeorm';

export const UserSchema = new EntitySchema<User>({
  name: typeof User.name,
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    username: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      createDate: true,
    },
    updatedAt: {
      type: Date,
      updateDate: true,
    },
  },
});
