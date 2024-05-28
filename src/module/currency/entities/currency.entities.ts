import { AbstractEntity } from 'src/common/entities';
import { BillEntity } from 'src/module/bill/entities';
import { CurrencyDto } from '../dtos';
import { UserConfigEntity } from 'src/module/user/entities';
import {
  Column,
  Entity,
  OneToMany,
  UpdateDateColumn,
  Generated,
} from 'typeorm';

@Entity({ name: 'currency' })
export class CurrencyEntity extends AbstractEntity<CurrencyDto> {
  @Column({ unique: true })
  name: string;

  @Column('float')
  currentExchangeRate: number;

  @Column({ default: false })
  base: boolean;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    nullable: true,
  })
  updatedAt: Date;

  @OneToMany(() => BillEntity, (bill: BillEntity) => bill.currency, {
    nullable: false,
  })
  bill: BillEntity[];

  @OneToMany(
    () => UserConfigEntity,
    (userConfig: UserConfigEntity) => userConfig.currency,
    { nullable: false },
  )
  userConfig: UserConfigEntity[];

  dtoClass = CurrencyDto;
}
