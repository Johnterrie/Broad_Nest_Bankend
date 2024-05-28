import { AbstractEntity } from 'src/common/entities';
import { UserEntity } from 'src/module/user/entities';
import { MessageDto } from '../dtos/message.dto';
import {
  Column,
  Entity,
  UpdateDateColumn,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { MessageKeyEntity } from './message-key.entity';
import { MessageTemplateEntity } from './message-template.entity';

@Entity({ name: 'messages' })
export class MessageEntity extends AbstractEntity<MessageDto> {
  @Column({ default: false })
  readed: boolean;

  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    nullable: true,
  })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.sender, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  sender: UserEntity;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.recipient, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  recipient: UserEntity;

  @OneToMany(
    () => MessageTemplateEntity,
    (templates: MessageTemplateEntity) => templates.message,
    { nullable: false },
  )
  templates: MessageTemplateEntity[];

  @ManyToOne(() => MessageKeyEntity, (key: MessageKeyEntity) => key.message, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'message_key_id' })
  key: MessageKeyEntity;

  dtoClass = MessageDto;
}
