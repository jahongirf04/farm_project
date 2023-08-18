export class CreateAdminDto {
  full_name: string
  user_email: string
  phone_number: string
  tg_link: string
  hashed_password: string
  hashed_token: string
  is_active: boolean
  is_creator: boolean
  description: string
}
