import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type commentDocument = HydratedDocument<CommentClass>;

@Schema()
export class CommentClass {
  @Prop()
  id: string;

  @Prop()
  @IsString()
  comment: string;
}

export const CommentSchema = SchemaFactory.createForClass(CommentClass);
