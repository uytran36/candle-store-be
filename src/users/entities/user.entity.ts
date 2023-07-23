import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  email: string;

  @Column()
  password: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  salt: string;
}
