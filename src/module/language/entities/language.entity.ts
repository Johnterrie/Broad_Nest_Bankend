import { AbstractEntity } from 'src/common/entities';
import { LanguageDto } from '../dtos';
import { Column, Entity, OneToMany } from 'typeorm';
import { MessageTemplateEntity } from 'src/module/message/entities/message-template.entity';

@Entity({ name: 'languages' })
export class LanguageEntity extends AbstractEntity<LanguageDto> {
  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  code: string;

  @OneToMany(
    () => MessageTemplateEntity,
    (template: MessageTemplateEntity) => template.language,
    { nullable: false },
  )
  template: MessageTemplateEntity[];

  dtoClass = LanguageDto;
}
