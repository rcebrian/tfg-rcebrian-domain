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
  BelongsTo, ForeignKey, HasOne, BelongsToMany, DefaultScope, Unique, Scopes
} from 'sequelize-typescript';
import {
  Role, Login, Group, UsersGroups, Device
} from './index';

@DefaultScope(() => ({
  attributes: [ 'id', 'firstName', 'lastName', 'phone', 'email', 'address', 'country','postalCode' ], 
  include: [ Role ]
}))

@Scopes(() => ({
  groups: {
    attributes: ['id'],
    include: [ Group ],
  }
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

  @Unique
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

  @HasOne(() => Device)
  device?: Device;
}
