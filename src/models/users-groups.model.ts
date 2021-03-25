import {
  Table, Model, ForeignKey, Column, DataType, PrimaryKey,
} from 'sequelize-typescript';
import Group from './group.model';
import User from './user.model';

@Table({ tableName: 'users_groups', timestamps: false })
export default class UsersGroups extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column({
    field: 'user_id',
    type: DataType.BIGINT,
  })
  userId!: number;

  @PrimaryKey
  @ForeignKey(() => Group)
  @Column({
    field: 'group_id',
    type: DataType.BIGINT,
  })
  groupId!: number;
}
