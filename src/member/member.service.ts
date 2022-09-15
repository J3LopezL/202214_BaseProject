import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { MemberEntity } from './member.entity';

@Injectable()
export class MemberService {

    constructor(
        @InjectRepository(MemberEntity)
        private readonly memberRepository: Repository<MemberEntity>,
    ){}
 
    async findAll(): Promise<MemberEntity[]> {
        return await this.memberRepository.find({ relations: ['clubs'] });
    }
 
    async findOne(id: string): Promise<MemberEntity> {
        const member: MemberEntity = await this.memberRepository.findOne({where: { id }, relations: ['clubs']} );
        if (!member)
          throw new BusinessLogicException("The member with the given id was not found", BusinessError.NOT_FOUND);
           return member;
    }
   
    async create(member: MemberEntity): Promise<MemberEntity> {
        return await this.memberRepository.save(member);
    }
 
    async update(id: string, member: MemberEntity): Promise<MemberEntity> {
        const persistedMemeber: MemberEntity = await this.memberRepository.findOne({where:{id}});
        if (!persistedMemeber)
          throw new BusinessLogicException("The member with the given id was not found", BusinessError.NOT_FOUND);
        member.id = id; 
        return await this.memberRepository.save(member);
    }
 
    async delete(id: string) {
        const member: MemberEntity = await this.memberRepository.findOne({where:{id}});
        if (!member)
          throw new BusinessLogicException("The member with the given id was not found", BusinessError.NOT_FOUND);
     
        await this.memberRepository.remove(member);
    }
}
