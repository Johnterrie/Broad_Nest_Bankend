import { AbstractDto } from 'src/common/dtos';

export class UserDTO extends AbstractDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email?: string;
  readonly avatar: string;
  readonly userAuth?;
  readonly userConfig?;

  constructor(user: any) {
    super(user);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.avatar = user.avatar;
    this.userAuth = user.userAuth?.toDto();
    this.userConfig = user.userConfig?.toDto();
  }
}
