// import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from 'src/common/dtos';
import { UserDTO } from 'src/module/user/dtos';
import { MessageEntity } from '../entities';
import { MessageTemplateDto } from './message-template.dto';
import { MessageKeyDto } from './message-key.dto';

export class MessageDto extends AbstractDto {
  // @ApiProperty()
  readonly readed: boolean;

  // @ApiProperty()
  readonly createdAt: Date;

  // @ApiProperty()
  readonly updatedAt?: Date;

  // @ApiProperty({ type: () => UserDto })
  readonly sender: UserDTO;

  // @ApiProperty({ type: () => UserDto })
  readonly recipient: UserDTO;

  // @ApiProperty({
  //   type: () => MessageTemplateDto,
  //   isArray: true,
  // })
  readonly templates: MessageTemplateDto[];

  // @ApiProperty({ type: () => MessageKeyDto })
  readonly key: MessageKeyDto;

  constructor(message: MessageEntity) {
    super(message);
    this.readed = message.readed;
    this.createdAt = message.createdAt;
    this.updatedAt = message.updatedAt;
    this.sender = message.sender.toDto();
    this.recipient = message.recipient.toDto();
    // this.templates = message.templates.toDtos();
    // this.key = message.key.toDto();
  }
}
