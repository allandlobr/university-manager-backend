import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student';
import { Subject } from './subject';

@Entity()
export class Grade {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  grade: number;

  @Column()
  quarter: number;

  @Column()
  year: number;

  @ManyToOne(() => Student, (student) => student.grades)
  student: Student;

  @ManyToOne(() => Subject, (subject) => subject.grades)
  subject: Subject;
}
