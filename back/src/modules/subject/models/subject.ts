import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes } from "mongoose";
import { Message } from "./message";

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {

    _id: string
    @Prop()
    title: string;
    @Prop()
    messages: Message[];
    @Prop()
    likes: number;
    @Prop()
    createdDate: Date;
    @Prop()
    updatedDate: Date;
}
export const SubjectSchema = SchemaFactory.createForClass(Subject);
