import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectModule } from './modules/subject/subject.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://admin:root@localhost:27017`, {
      dbName: "forum-db"
    }),
    SubjectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
