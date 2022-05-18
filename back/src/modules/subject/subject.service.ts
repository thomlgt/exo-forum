import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './models/message';
import { Subject, SubjectDocument } from './models/subject';

@Injectable()
export class SubjectService {
    constructor(@InjectModel(Subject.name) private subjectModel: Model<SubjectDocument>) {}

    create(subject: Subject) {
        subject.createdDate = new Date();
        subject.updatedDate = new Date();
        subject.likes = 0;
        const createdSubject = new this.subjectModel(subject);
        return createdSubject.save();
    }

    findAll() {
        return this.subjectModel.find();
    }

    findById(id: string) {
        return this.subjectModel.findById(id);
    }

    addMessage(id : string, message : Message) {
        message.likes = 0;
        message.createdDate = new Date();
        return this.subjectModel.findByIdAndUpdate(
            id,
            {$push : {messages : message}, updatedDate: new Date()},
            {new : true}
        );
    }

    deleteMessage(id : string, message : Message) {
        return this.subjectModel.findByIdAndUpdate(
            id,
            {$pull : {messages : message}, updatedDate: new Date()},
            {new : true}
        );
    }

    delete(id: string) {
        return this.subjectModel.findByIdAndDelete(id);
    }
}
