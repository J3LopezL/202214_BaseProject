import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubEntity } from 'src/club/club.entity';
import { MemberEntity } from 'src/member/member.entity'; 
import { ClubMemberService } from './club-member.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClubEntity, MemberEntity])],
  providers: [ClubMemberService]
})
export class ClubMemberModule {}
