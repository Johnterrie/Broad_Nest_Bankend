import { AbstractEntity } from 'src/common/entities';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { UserEntity } from 'src/module/user/entities';
import { BillDto } from '../dtos';
import { CurrencyEntity } from 'src/module/currency/entities';
import { TransactionEntity } from 'src/module/transaction/entities';

@Entity({ name: 'bills' })
export class BillEntity extends AbstractEntity<BillDto> {
  @Column({ unique: true, length: 26 })
  accountBillNumber: string;

  /**
   * This is a @Virtual column.
   * Used only to map entity correctly using the .getManyAndCount() method.
   */
  @Column({ select: false, insert: false, update: false, nullable: true })
  readonly amountMoney: string;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.bills, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  user: UserEntity;

  @ManyToOne(
    () => CurrencyEntity,
    (currency: CurrencyEntity) => currency.bill,
    { nullable: false, onDelete: 'CASCADE' },
  )
  currency: CurrencyEntity;

  @OneToMany(
    () => TransactionEntity,
    (transaction: TransactionEntity) => transaction.recipientBill,
    {
      nullable: false,
    },
  )
  recipientBill: TransactionEntity[];

  @OneToMany(
    () => TransactionEntity,
    (transaction: TransactionEntity) => transaction.senderBill,
    {
      nullable: false,
    },
  )
  senderBill: TransactionEntity[];

  dtoClass = BillDto;
}
