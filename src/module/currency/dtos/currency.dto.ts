// import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from 'src/common/dtos';
import { CurrencyEntity } from '../entities/currency.entities';

export class CurrencyDto extends AbstractDto {
  // @ApiProperty()
  readonly name: string;

  readonly uuid: string;

  // @ApiProperty()
  readonly currentExchangeRate: number;

  constructor(currency: CurrencyEntity) {
    super(currency);
    this.name = currency.name;
    this.currentExchangeRate = currency.currentExchangeRate;
  }
}
