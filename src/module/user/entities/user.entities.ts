import { AbstractEntity } from 'src/common/entities';
import { UserDTO } from '../dtos';
import { UserAuthEntity } from './user-auth.entity';
import { UserConfigEntity } from './user-config.entities';
import { BillEntity } from 'src/module/bill/entities';
import { MessageEntity } from 'src/module/message/entities';
import { UserAuthForgottenPasswordEntity } from './user-auth-forgotten-password.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDTO> {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  avatar?: string;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    nullable: true,
  })
  updatedAt: Date;

  @OneToOne(() => UserAuthEntity, (userAuth: UserAuthEntity) => userAuth.user)
  userAuth: UserAuthEntity;

  @OneToOne(
    () => UserConfigEntity,
    (userConfig: UserConfigEntity) => userConfig.user,
  )
  userConfig: UserConfigEntity;

  @OneToMany(() => BillEntity, (bill: BillEntity) => bill.user, {
    nullable: false,
  })
  bills: BillEntity[];

  @OneToMany(() => MessageEntity, (message: MessageEntity) => message.sender, {
    nullable: false,
  })
  sender: MessageEntity[];

  @OneToMany(
    () => MessageEntity,
    (message: MessageEntity) => message.recipient,
    { nullable: false },
  )
  recipient: MessageEntity[];

  @OneToMany(
    () => UserAuthForgottenPasswordEntity,
    (UserAuthForgottenPassword: UserAuthForgottenPasswordEntity) =>
      UserAuthForgottenPassword.user,
    { cascade: true },
  )
  public userAuthForgottenPassword?: UserAuthForgottenPasswordEntity[];

  dtoClass = UserDTO;
}
