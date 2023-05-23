import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({})],
  providers: [AuthService],
})
export class AuthModule {}
