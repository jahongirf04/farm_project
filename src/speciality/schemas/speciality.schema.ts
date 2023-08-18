// interface CreateSpecialityAttrs {
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

export type SpecialityDocument = HydratedDocument<Speciality>;

@Schema()
export class Speciality {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const SpecialitySchema = SchemaFactory.createForClass(Speciality);
