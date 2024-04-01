import { Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(logindto
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(logindto.username);
    
    
    if (user.password !== logindto.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.username, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}


