import {
  Unique,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@Unique(['name'])
@Unique(['phone'])
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: boolean;

  @UpdateDateColumn()
  updatedAt: boolean;
}
