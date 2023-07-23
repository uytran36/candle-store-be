import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    // private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    // const user = await this.usersService.findOne(email);
    // if (user) {
    //   const hashedPassword = bcrypt.hashSync(pass, user.salt);
    //   const pwdWithPepper = bcrypt.hashSync(hashedPassword, process.env.PEPPER);
    //   const isMatch = pwdWithPepper === user.password;
    //   if (isMatch) {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //     const { password, ...result } = user;
    //     return result;
    //   }
    // }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.ACCESS_TOKEN_SECRET,
      expiresIn: '6h',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.REFRESH_TOKEN_SECRET,
      expiresIn: '30d',
    });

    return {
      isLoginSuccess: true,
      data: { userId: user.id, accessToken, refreshToken },
    };
  }

  async logout(accessToken: string) {
    return accessToken;
  }

  async getRefreshToken(refreshToken: string) {
    const { email, sub } = this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_SECRET,
    });

    const accessToken = this.jwtService.sign(
      { email, sub },
      {
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: '6h',
      },
    );

    const newRefreshToken = this.jwtService.sign(
      { email, sub },
      {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: '30d',
      },
    );

    return {
      data: {
        userId: sub,
        accessToken,
        refreshToken: newRefreshToken,
      },
    };
  }
}
