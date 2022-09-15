import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { plainToInstance } from 'class-transformer';
import { ClubMemberService } from './club-member.service';
import { MemberEntity } from '../member/member.entity';
import { MemberDto } from '../member/member.dto';

@Controller('clubs')
@UseInterceptors(BusinessErrorsInterceptor)
export class ClubMemberController {
    constructor(private readonly clubMemberService: ClubMemberService) {}

@Post(':clubId/members/:memberId')
    async addMemberClub(@Param('clubId') clubId: string, @Param('memberId') memberId: string){
       return await this.clubMemberService.addMemberClub(clubId, memberId);
   }

@Get(':clubId/members/:memberId')
   async finMemberByClubIdMemberId(@Param('clubId') clubId: string, @Param('memberId') memberId: string){
       return await this.clubMemberService.findMemberByClubIdMemberId(clubId, memberId);
   }

@Get(':clubId/members')
   async findMembersByClubId(@Param('clubId') clubId: string){
       return await this.clubMemberService.findMembersByClubId(clubId);
   }

@Put(':clubId/members')
   async associateMembersClub(@Body() membersDto: MemberDto[], @Param('clubId') clubId: string){
       const members = plainToInstance(MemberEntity, membersDto)
       return await this.clubMemberService.associateMembersClub(clubId, members);
   }

@Delete(':clubId/members/:memberId')
@HttpCode(204)
    async deleteMemberClub(@Param('clubId') clubId: string, @Param('memberId') memberId: string){
        return await this.clubMemberService.deleteMemberClub(clubId, memberId);
    }
}
