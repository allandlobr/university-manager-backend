import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Grade } from './grade';
import { StudentToSubject } from './student-to-subject';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  quarters: number;

  @OneToMany(() => Grade, (grade) => grade.subject)
  grades: Grade[];

  @OneToMany(
    () => StudentToSubject,
    (studentToSubject) => studentToSubject.subject,
  )
  studentToSubject: StudentToSubject[];
}
