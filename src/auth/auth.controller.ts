import {
  Body,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/database/entities/user';
import { QueryFailedError } from 'typeorm';
import { Role } from 'src/enums/role.enum';
import { Public } from 'src/decorators/is-public.decorator';
import { Roles } from 'src/decorators/roles.decorator';

class SignInDto {
  email: string;
  password: string;
}

class SignUpDto {
  email: string;
  password: string;
  role: Role;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signIn(@Body() { email, password }: SignInDto): Promise<any> {
    return await this.authService.signIn(email, password);
  }

  @Public()
  @Post('signup')
  async signUp(
    @Body() { email, password, role }: SignUpDto,
  ): Promise<User | string> {
    try {
      return await this.authService.signUp(email, password, role);
    } catch (error) {
      // TODO: Add BadRequestException
      if (error instanceof QueryFailedError) {
        throw new ConflictException('User already exists');
      }
      throw new InternalServerErrorException();
    }
  }
}
