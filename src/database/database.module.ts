import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student';
import { Course } from './entities/course';
import { Grade } from './entities/grade';
import { Professor } from './entities/professor';
import { Subject } from './entities/subject';
import { StudentToCourse } from './entities/student-to-course';
import { StudentToSubject } from './entities/student-to-subject';
import { User } from './entities/user';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'youshallnotpass',
      database: 'devdb',
      entities: [
        User,
        Student,
        Course,
        Grade,
        Subject,
        Professor,
        StudentToCourse,
        StudentToSubject,
      ],
      synchronize: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
