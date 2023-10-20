import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subject } from './subject';

@Entity()
export class Professor {
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

  @ManyToMany(() => Subject)
  @JoinTable({ name: 'professors_subjects' })
  subjects: Subject[];
}
