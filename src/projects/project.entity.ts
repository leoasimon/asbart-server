import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  projectId: number;

  @Column({ nullable: false })
  projectName: string;

  @Column()
  coverUrl: string;
}
