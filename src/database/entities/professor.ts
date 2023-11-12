import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subject } from './subject';
import { User } from './user';

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

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
