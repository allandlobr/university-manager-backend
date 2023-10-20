import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student';
import { Subject } from './subject';
import { Course } from './course';

@Entity('students_courses')
export class StudentToCourse {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Student, (student) => student.studentToCourse)
  student: Student;

  @ManyToOne(() => Course, (course) => course.studentToCourse)
  course: Course;

  @Column()
  completed: boolean;
}
