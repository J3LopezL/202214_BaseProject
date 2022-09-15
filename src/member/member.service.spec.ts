import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { MemberEntity } from './member.entity';
import { MemberService } from './member.service';
import { faker } from '@faker-js/faker';

describe('MemberService', () => {
  let service: MemberService;
  let repository: Repository<MemberEntity>;
  let membersList: MemberEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [MemberService],
    }).compile();

    service = module.get<MemberService>(MemberService);
    repository = module.get<Repository<MemberEntity>>(
      getRepositoryToken(MemberEntity),
    );
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    membersList = [];
    for (let i = 0; i < 5; i++) {
      const member: MemberEntity = await repository.save({
        name: faker.company.name(),
        email: faker.internet.email(),
        dateBirth: faker.date.birthdate(),
      });
      membersList.push(member);
    }
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});