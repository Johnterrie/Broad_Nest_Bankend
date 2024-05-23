import { AbstractEntity } from 'src/common/entities';
import { UserDTO } from '../dtos';
import { Column } from 'typeorm';

export class UserEntity extends AbstractEntity<UserDTO> {}
