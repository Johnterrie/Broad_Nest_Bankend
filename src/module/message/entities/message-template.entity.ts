import { AbstractEntity } from 'src/common/entities';
import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import { MessageTemplateDto } from '../dtos';
import { MessageEntity } from '.';
// import { LanguageEntity

@Entity({ name: 'messages_templates' })
export class MessageTemplateEntity extends AbstractEntity<MessageTemplateDto> {
  @Column()
  subject: string;

  @Column('text')
  content: string;

  @Column('simple-array', { nullable: true })
  actions?: string[];

  @ManyToOne(
    () => MessageEntity,
    (message: MessageEntity) => message.templates,
    { nullable: false, onDelete: 'CASCADE' },
  )
  message: MessageEntity;

  @ManyToOne(
    () => LanguageEntity,
    (language: LanguageEntity) => language.template,
    { nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn()
  language: LanguageEntity;

  dtoClass = MessageTemplateDto;
}
