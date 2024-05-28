// import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from 'src/common/dtos';
import { UserAuthForgottenPasswordEntity } from '../entities/user-auth-forgotten-password.entity';

export class UserAuthForgottenPasswordDto extends AbstractDto {
  // @ApiProperty()
  readonly createdAt: Date;

  // @ApiProperty()
  readonly used: boolean; ``

  constructor(userAuthForgottenPassword: UserAuthForgottenPasswordEntity) {
    super(userAuthForgottenPassword);
    this.createdAt = userAuthForgottenPassword.createdAt;
    this.used = userAuthForgottenPassword.used;
  }
}
