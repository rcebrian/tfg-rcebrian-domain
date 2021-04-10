import {
  Model, Table, Column, Index, PrimaryKey, DataType, BelongsTo, ForeignKey,
} from 'sequelize-typescript';
import { User } from './index';

@Table({ tableName: 'logins', timestamps: false })
export default class Login extends Model {
  @Index('logins_user_id_uindex')
  @ForeignKey(() => User)
  @PrimaryKey
  @Column({
    field: 'user_id',
    type: DataType.BIGINT,
    allowNull: false,
  })
  id!: number;

  @Column({
    field: 'password_hash',
    type: DataType.TEXT,
    allowNull: false,
  })
  passwordHash!: string;

  @Column({
    field: 'password_salt',
    type: DataType.TEXT,
    allowNull: false,
  })
  passwordSalt!: string;

  @Column({
    field: 'access_token',
    type: DataType.TEXT,
  })
  accessToken!: string;

  @Column({
    field: 'refresh_token',
    type: DataType.TEXT,
  })
  refreshToken!: string;

  @BelongsTo(() => User)
  user!: User;
}
