import {
  Controller,
  UseGuards,
  Post,
  Request,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/localAuth.guard';
// import { RegisterDto } from '../users/dtos/register.dto';
// import { User } from 'src/db/entities/user.entity';
// import { UsersService } from '../users/users.service';
// import { UserExistException } from '../users/exceptions/user-exist.exception';
import { plainToClass } from 'class-transformer';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
// import {
//   RefreshTokenDto,
//   RefreshTokenResponseDto,
//   ForgotPasswordDto,
//   ValidateEmailResponseDto,
//   ValidateEmailDto,
// } from './dtos/auth.dto';
// import { ClassErrorResponse } from 'src/shared/utils/class-response';
// import { SwaggerApiOkResponse } from 'src/shared/utils/function-swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(
    private authService: AuthService, // private usersService: UsersService,
  ) {}

  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  // @Post('refresh-token')
  // @HttpCode(HttpStatus.OK)
  // @ApiOperation({
  //   summary: 'Refresh token',
  // })
  // @ApiBearerAuth()
  // @SwaggerApiOkResponse(RefreshTokenResponseDto, 'object', {
  //   description: 'Return new access token and refresh token',
  // })
  // @ApiBadRequestResponse({
  //   description: 'Return error when input invalid',
  //   type: ClassErrorResponse,
  // })
  // async refreshToken(
  //   @Body()
  //   refreshTokenDto: RefreshTokenDto,
  // ): Promise<RefreshTokenResponseDto> {
  //   return this.authService.getRefreshToken(refreshTokenDto.refreshToken);
  // }

  // @Post('forgot-password')
  // async sendEmailForgotPassword(
  //   @Body() forgotPassword: ForgotPasswordDto,
  // ): Promise<any> {
  //   return await this.authService.sendEmailForgotPassword(forgotPassword);
  // }

  // @Post('register')
  // @HttpCode(HttpStatus.CREATED)
  // @SwaggerApiOkResponse(User, 'object')
  // async register(@Body() user: RegisterDto): Promise<User> {
  //   const existingUser = await this.usersService.findOneByEmail(user.email);
  //   console.log(user);
  //   if (existingUser) {
  //     throw new UserExistException(user.email);
  //   }

  //   const newUser = await this.usersService.createUser(user);

  //   return plainToClass(User, newUser);
  // }

  // @Post('/default-user')
  // async create() {
  //   return this.usersService.createADefaultUser();
  // }

  // @Post('/verify-email')
  // @ApiOperation({
  //   summary: 'Validate email',
  // })
  // @HttpCode(HttpStatus.OK)
  // @SwaggerApiOkResponse(ValidateEmailResponseDto, 'object', {
  //   description: 'Email information',
  // })
  // @ApiBadRequestResponse({
  //   description: 'Email information',
  //   type: ClassErrorResponse,
  // })
  // async validateEmail(
  //   @Body() payload: ValidateEmailDto,
  // ): Promise<ValidateEmailResponseDto> {
  //   const { email } = payload;
  //   try {
  //     const user = await this.authService.validateUserEmail(email);
  //     return {
  //       isValid: Boolean(user),
  //     };
  //   } catch (error) {
  //     return {
  //       isValid: false,
  //     };
  //   }
  // }
}
