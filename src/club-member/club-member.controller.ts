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
    async addMemberToClub(@Param('clubId') clubId: string, @Param('memberId') memberId: string){
       return await this.clubMemberService.addMemberToClub(clubId, memberId);
   }

@Get(':clubId/members/:memberId')
   async finMemberFromClub(@Param('clubId') clubId: string, @Param('memberId') memberId: string){
       return await this.clubMemberService.findMemberFromClub(clubId, memberId);
   }

@Get(':clubId/members')
   async findMembersFromClub(@Param('clubId') clubId: string){
       return await this.clubMemberService.findMembersFromClub(clubId);
   }

@Put(':clubId/members')
   async updateMembersFromClub(@Body() membersDto: MemberDto[], @Param('clubId') clubId: string){
       const members = plainToInstance(MemberEntity, membersDto)
       return await this.clubMemberService.updateMembersFromClub(clubId, members);
   }

@Delete(':clubId/members/:memberId')
@HttpCode(204)
    async deleteMemberFromClub(@Param('clubId') clubId: string, @Param('memberId') memberId: string){
        return await this.clubMemberService.deleteMemberFromClub(clubId, memberId);
    }
}
