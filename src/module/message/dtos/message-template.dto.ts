// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AbstractDto } from 'src/common/dtos';
import { MessageTemplateEntity } from '../entities/message-template.entity';
import { IsOptional, IsArray } from 'class-validator';
import { LanguageDto } from 'src/module/language/dtos';
import { MessageEntity } from '../entities';

export class MessageTemplateDto extends AbstractDto {
  // @ApiProperty()
  readonly subject: string;

  // @ApiProperty()
  readonly content: string;

  // @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  readonly actions?: string[];

  // @ApiProperty({ type: () => LanguageDto })
  readonly language: LanguageDto;

  constructor(template: MessageTemplateEntity) {
    super(template);
    this.subject = template.subject;
    this.content = template.content;
    this.actions = template?.actions;
    this.language = template.language.toDto();
  }
}
