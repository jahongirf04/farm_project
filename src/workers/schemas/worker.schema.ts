import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Speciality } from '../../speciality/schemas/speciality.schema';

export type WorkersDocument = HydratedDocument<Workers>;

@Schema({versionKey: false})
export class Workers {
  @Prop()
  name: string;

  @Prop()
  age: string;

  @Prop()
  experience: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Speciality"})
  speciality_id: Speciality;

  @Prop()
  phone_number: string

  @Prop()
  username: string

  @Prop()
  worker_schedule: string

  @Prop()
  block: string
}

export const WorkersSchema = SchemaFactory.createForClass(Workers);

