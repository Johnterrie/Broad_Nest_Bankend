import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";


@Controller("Auth")
export class AuthController {

  @Post("login")
  @HttpCode(HttpStatus.OK)
  async userLogin( @Body() userLoginDTO: any) {

  }
}