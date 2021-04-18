import {
    Model, Table, Column, Index, PrimaryKey, DataType, BelongsTo, ForeignKey, CreatedAt, UpdatedAt, DeletedAt, Unique,
  } from 'sequelize-typescript';
  import { User } from './index';
  
  @Table({ tableName: 'devices', timestamps: false })
  export default class Device extends Model {
    @Index('devices_user_id_uindex')
    @ForeignKey(() => User)
    @PrimaryKey
    @Unique
    @Column({
      field: 'user_id',
      type: DataType.BIGINT,
      allowNull: false,
    })
    id!: number;
  
    @Column({
      field: 'bearer_token',
      type: DataType.TEXT,
    })
    bearerToken!: string;

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
  
    @BelongsTo(() => User)
    user!: User;
  }
  