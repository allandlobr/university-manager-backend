import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student';
import { Subject } from './subject';

@Entity('students_subjects')
export class StudentToSubject {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Student, (student) => student.studentToSubject)
  student: Student;

  @ManyToOne(() => Subject, (subject) => subject.studentToSubject)
  subject: Subject;

  @Column()
  completed: boolean;
}
