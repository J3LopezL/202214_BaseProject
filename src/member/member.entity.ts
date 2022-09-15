import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClubEntity } from '../club/club.entity';

@Entity()
export class MemberEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    dateBirth: Date;
    
    @ManyToMany(() => ClubEntity, club => club.members)
    clubs: ClubEntity[];
}
