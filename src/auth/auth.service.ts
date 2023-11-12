import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<string> {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException();
    }

    // TODO: Return Student/Professor data
    const payload = { sub: user.email, role: user.role };
    const jwt = this.jwtService.sign(payload);
    return jwt;
  }

  async signUp(email: string, password: string, role: Role): Promise<any> {
    const user = await this.usersService.createOne(email, password, role);
    return user;
  }
}
