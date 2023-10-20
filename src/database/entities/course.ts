import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentToCourse } from './student-to-course';
import { Subject } from './subject';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => StudentToCourse, (studentToCourse) => studentToCourse.course)
  studentToCourse: StudentToCourse[];

  @ManyToMany(() => Subject)
  @JoinTable({ name: 'subjects_courses' })
  subjects: Subject[];
}
