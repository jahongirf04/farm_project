import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlocksDocument = HydratedDocument<Blocks>;

@Schema()
export class Blocks {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const BlocksSchema = SchemaFactory.createForClass(Blocks);
