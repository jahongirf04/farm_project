
// interface CreateAdminAttrs {
//   full_name: string;
//   user_email: string;
//   phone_number: string;
//   tg_link: string;
//   hashed_password: string;
//   hashed_token: string;
//   is_active: boolean;
//   is_creator: boolean;
//   description: string;
// }


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop()
  full_name: string;

  @Prop({required: true})
  user_email: string;

  @Prop()
  phone_number: string;

  @Prop()
  tg_link: string;

  @Prop()
  hashed_password: string

  @Prop()
  hashed_token: string

  @Prop()
  is_active: boolean

  @Prop()
  is_creator: boolean

  @Prop()
  description: string
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
