import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  CreatedAt,
  DeletedAt,
  UpdatedAt,
  Index,
  ForeignKey, BelongsTo, BelongsToMany, DefaultScope
} from 'sequelize-typescript';
import { Company, User, UsersGroups } from './index';

@DefaultScope(() => ({
  attributes: ['id', 'name', 'description'],
  include: User
}))

@Table({ tableName: 'groups', timestamps: true })
export default class Group extends Model {
  @Index('groups_id_uindex')
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
    type: DataType.STRING(32),
    allowNull: false,
  })
  name!: string;

  @Column({
    field: 'description',
    type: DataType.STRING(64),
    allowNull: false,
  })
  description!: string;

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

  @ForeignKey(() => Company)
  @Column({
    field: 'company_id',
  })
  companyId!: number

  @BelongsTo(() => Company)
  company?: Company;

  @BelongsToMany(() => User, () => UsersGroups)
  users?: User[];
}
