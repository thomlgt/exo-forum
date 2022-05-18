import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Message } from './models/message';
import { Subject } from './models/subject';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {

    constructor(private subjectService : SubjectService) {

    }

    @Get()
    findAll() {
        return this.subjectService.findAll();
    }

    @Get(":id")
    findById(@Param("id") id: string) {
        return this.subjectService.findById(id);
    }

    @Post()
    create(@Body() subject: Subject) {
        return this.subjectService.create(subject);
    }

    @Post(":id/message")
    addMessage(@Param("id") id: string, @Body() message: Message) {
        return this.subjectService.addMessage(id, message);
    }

    @Delete(":id/message")
    deleteMessage(@Param("id") id: string, @Body() message: Message) {
        return this.subjectService.deleteMessage(id, message);
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.subjectService.delete(id);
    }
}
