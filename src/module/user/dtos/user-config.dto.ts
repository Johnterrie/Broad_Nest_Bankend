// import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from 'src/common/dtos';
import { CurrencyDto } from 'src/module/currency/dtos/currency.dto';
import { UserConfigEntity } from '../entities';
import { Type } from 'class-transformer';

export class UserConfigDto extends AbstractDto {
  // @ApiProperty()
  readonly notificationCount: number;

  @Type(() => Number)
  // @ApiProperty()
  readonly messageCount: number;

  // @ApiProperty({ type: () => CurrencyDto })
  readonly currency: CurrencyDto;

  constructor(userConfig: UserConfigEntity) {
    super(userConfig);
    this.notificationCount = userConfig.notificationCount;
    this.messageCount = userConfig.messageCount;
    this.currency = userConfig.currency.toDto();
  }
}
