import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { DataSource, Repository } from 'typeorm';
import { User } from '../models/user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let dataSourceMock: Partial<DataSource>;
  let repositoryMock: Partial<jest.Mocked<Repository<User>>>;

  beforeEach(async () => {
    repositoryMock = {
      find: jest.fn(),
      findOneBy: jest.fn(),
      save: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };
    dataSourceMock = {
      getRepository: jest.fn().mockReturnValue(repositoryMock),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: DataSource,
          useValue: dataSourceMock,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all users', async () => {
    const users = [
      { id: 1, username: 'alice91', firstName: 'Alice', lastName: 'Odobert' },
    ];
    (repositoryMock.find as jest.Mock).mockResolvedValue(users);

    const result = await service.findAll();
    expect(dataSourceMock.getRepository).toHaveBeenCalledWith(User);
    expect(repositoryMock.find).toHaveBeenCalled();
    expect(result).toEqual(users);
  });
});
