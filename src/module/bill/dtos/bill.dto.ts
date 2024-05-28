// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { AbstractDto } from 'src/common/dtos';
import { BillEntity } from '../entities';
import { CurrencyDto } from 'src/module/currency/dtos';
import { UserDTO } from 'src/module/user/dtos';

export class BillDto extends AbstractDto {
  // @ApiProperty()
  readonly accountBillNumber: string;

  // @ApiPropertyOptional()
  @IsOptional()
  readonly amountMoney?: string;

  // @ApiProperty({ type: () => CurrencyDto })
  readonly currency: CurrencyDto;

  // @ApiPropertyOptional({ type: () => UserDto })
  @IsOptional()
  readonly user?: UserDTO;

  constructor(bill: BillEntity) {
    super(bill);
    this.amountMoney = bill.amountMoney;
    this.accountBillNumber = bill.accountBillNumber;
    // this.currency = bill.currency.toDto();
    // this.user = bill.user?.toDto();
  }
}
