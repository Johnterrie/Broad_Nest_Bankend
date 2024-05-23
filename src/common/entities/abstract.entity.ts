import { PrimaryGeneratedColumn, Column, Generated } from 'typeorm';
import { AbstractDto } from '../dtos';

export abstract class AbstractEntity<T extends AbstractDto = AbstractDto> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  abstract dtoClass: new (entity: AbstractEntity, option?: any) => T;

  // toDto(option?: any): T {
  //   ret
  // }
}
