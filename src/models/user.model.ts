import {
  Model,
  Table,
  Column,
  Index,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
  BelongsTo, ForeignKey, HasOne, BelongsToMany, DefaultScope, Scopes
} from 'sequelize-typescript';
import {
  Role, Login, Group, UsersGroups,
} from './index';

const defaultAttributes = [ 'id', 'firstName', 'lastName', 'phone', 'email', 'address', 'country','postalCode' ];

@DefaultScope(() => ({
  attributes: defaultAttributes, 
  include: [ Role ]
}))

@Scopes(() => ({
  noLogin: {
    attributes: defaultAttributes, 
    include: [ Role ]
  },
}))

@Table({ tableName: 'users', timestamps: true })
export default class User extends Model {
  @Index('users_id_uindex')
  @PrimaryKey
  @AutoIncrement
  @Column({
    field: 'id',
    type: DataType.BIGINT,
    allowNull: false,
  })
  id!: number;

  @Column({
    field: 'firstname',
    type: DataType.STRING(32),
    allowNull: false,
  })
  firstName!: string;

  @Column({
    field: 'lastname',
    type: DataType.STRING(64),
    allowNull: false,
  })
  lastName!: string;

  @Column({
    field: 'phone',
    type: DataType.STRING(32),
    allowNull: false,
  })
  phone?: string;

  @Column({
    field: 'email',
    type: DataType.STRING(64),
    allowNull: false,
  })
  email!: string;

  @Column({
    field: 'address',
    type: DataType.STRING(128),
    allowNull: false,
  })
  address!: string;

  @Column({
    field: 'country',
    type: DataType.STRING(64),
    allowNull: false,
  })
  country!: string;

  @Column({
    field: 'postal_code',
    type: DataType.STRING(10),
    allowNull: false,
  })
  postalCode!: string;

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

  @ForeignKey(() => Role)
  @Column({
    field: 'role_id',
  })
  roleId!: number;

  @BelongsToMany(() => Group, () => UsersGroups)
  groups?: Group[];

  @BelongsTo(() => Role)
  role!: Role;

  @HasOne(() => Login)
  login!: Login;
}
