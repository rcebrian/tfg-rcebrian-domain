import {
  Table, Column, Model, PrimaryKey, DataType, AutoIncrement, Index, HasMany, DefaultScope, Scopes
} from 'sequelize-typescript';
import { User } from './index';

@DefaultScope(() => ({
  attributes: ['name']
}))

@Scopes(() => ({
  full: {
    attributes: ['id', 'name']
  }
}))

@Table({ tableName: 'roles', timestamps: false })
export default class Role extends Model {
  @Index('roles_id_uindex')
  @PrimaryKey
  @AutoIncrement
  @Column({
    field: 'id',
    type: DataType.BIGINT,
    allowNull: false,
  })
  id!: number;

  @Index('roles_name_uindex')
  @Column({
    field: 'name',
    type: DataType.STRING(16),
    allowNull: false,
  })
  name!: string;

  @Column({
    field: 'description',
    type: DataType.STRING(32),
  })
  description?: string;

  @HasMany(() => User)
  users?: User[]
}
