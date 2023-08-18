import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  full_name: string;
  user_email: string;
  phone_number: string;
  tg_link: string;
  hashed_password: string;
  hashed_token: string;
  is_active: boolean;
  is_creator: boolean;
  description: string;
}
