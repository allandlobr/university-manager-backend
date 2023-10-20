import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Grade } from './grade';
import { Subject } from './subject';
import { StudentToSubject } from './student-to-subject';
import { StudentToCourse } from './student-to-course';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    default: false,
  })
  active: boolean;

  @OneToMany(() => Grade, (grade) => grade.student)
  grades: Grade[];

  @OneToMany(
    () => StudentToSubject,
    (studentToSubject) => studentToSubject.student,
  )
  studentToSubject: StudentToSubject[];

  @OneToMany(
    () => StudentToCourse,
    (studentToCourse) => studentToCourse.student,
  )
  studentToCourse: StudentToCourse[];
}
