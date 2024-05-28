// import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from 'src/common/dtos';
import { LanguageEntity } from '../entities';

export class LanguageDto extends AbstractDto {
  // @ApiProperty()
  readonly name: string;

  // @ApiProperty()
  readonly code: string;

  constructor(language: LanguageEntity) {
    super(language);
    this.name = language.name;
    this.code = language.code;
  }
}
