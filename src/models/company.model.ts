import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  UpdatedAt,
  CreatedAt,
  DeletedAt,
  Index,
  HasMany, DefaultScope, Scopes,
} from 'sequelize-typescript';
import { Group } from './index';

@DefaultScope(() => ({
  attributes: ['id', 'name', 'description']
}))

@Scopes(() => ({
  tree: {
    attributes: ['id', 'name', 'description'],
    include: Group
  }
}))

@Table({ tableName: 'companies', timestamps: true })
export default class Company extends Model {
  @Index('companies_id_uindex')
  @PrimaryKey
  @AutoIncrement
  @Column({
    field: 'id',
    type: DataType.BIGINT,
    allowNull: false,
  })
  id!: number;

  @Column({
    field: 'name',
    type: DataType.STRING(512),
    allowNull: false,
  })
  name!: string;

  @Column({
    field: 'description',
    type: DataType.TEXT,
    allowNull: true,
  })
  description?: string;

  @CreatedAt
  @Column({
    field: 'created_at',
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    field: 'updated_at',
  })
  updatedAt!: Date;

  @DeletedAt
  @Column({
    field: 'deleted_at',
  })
  deletedAt!: Date;

  @HasMany(() => Group)
  groups!: Group;
}
