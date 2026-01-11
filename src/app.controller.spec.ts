import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Welcome to the Icecube API v1.0.0"', () => {
      expect(appController.getInformation()).toBe(
        'Welcome to the Icecube API v1.0.0',
      );
    });
  });
});
