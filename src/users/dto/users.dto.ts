import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  id: Number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
