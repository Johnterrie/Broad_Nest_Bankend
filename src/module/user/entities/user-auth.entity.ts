import { AbstractEntity } from 'src/common/entities';
import { UserAuthDto } from '../dtos';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';

import { UserEntity } from './user.entities';
import { RoleType } from 'src/common/constants';

@Entity({ name: 'users_auth' })
export class UserAuthEntity extends AbstractEntity<UserAuthDto> {
  @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
  role: RoleType;

  @Column({ unique: true })
  pinCode: number;

  @Column()
  password: string;

  @Column({ nullable: true })
  lastSuccessfulLoggedDate?: Date;

  @Column({ nullable: true })
  lastFailedLoggedDate?: Date;

  @Column({ nullable: true })
  lastLogoutDate?: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    nullable: true,
  })
  @UpdateDateColumn({
    type: 'timestamp with time zone',
    nullable: true,
  })
  updatedAt: Date;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.userAuth, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: UserEntity;

  dtoClass = UserAuthDto;
}
