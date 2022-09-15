import { Column, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { MemberEntity } from '../member/member.entity';

@Entity()
export class ClubEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    dateCreate: Date;

    @Column()
    description: string;

    @ManyToMany(() => MemberEntity, member => member.clubs)
    @JoinTable()
    members: MemberEntity[];
}
