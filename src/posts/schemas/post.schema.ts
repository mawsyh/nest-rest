import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<PostClass>;
@Schema()
export class PostClass {
  @Prop()
  id: string;

  @Prop()
  @IsString()
  title: string;

  @Prop()
  body: string;
}

export const PostSchema = SchemaFactory.createForClass(PostClass);
