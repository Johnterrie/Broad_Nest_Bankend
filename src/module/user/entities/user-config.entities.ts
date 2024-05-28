import { AbstractEntity } from 'src/common/entities';
import { UserEntity } from './user.entities';
import { UserConfigDto } from '../dtos';
import { CurrencyEntity } from 'src/module/currency/entities';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity({ name: 'users_config' })
export class UserConfigEntity extends AbstractEntity<UserConfigDto> {
  @Column({ default: 0 })
  readonly notificationCount: number;

  @Column({ select: false, insert: false, update: false, nullable: true })
  messageCount: number;

  @Column({ nullable: true })
  lastPresentLoggedDate?: Date;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.userConfig, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(
    () => CurrencyEntity,
    (currency: CurrencyEntity) => currency.userConfig,
    { nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'main_currency_id' })
  currency: CurrencyEntity;

  dtoClass = UserConfigDto;
}
