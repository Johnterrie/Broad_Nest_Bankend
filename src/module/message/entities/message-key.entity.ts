import { AbstractEntity } from 'src/common/entities';
import { Entity, Column, OneToMany } from 'typeorm';
import { MessageEntity } from '.';
import { MessageKeyDto } from '../dtos';

@Entity({ name: 'messages_keys' })
export class MessageKeyEntity extends AbstractEntity<MessageKeyDto> {
  @Column({ unique: true })
  name: string;

  @OneToMany(() => MessageEntity, (message: MessageEntity) => message.key, {
    nullable: false,
  })
  message: MessageEntity[];

  dtoClass = MessageKeyDto;
}
