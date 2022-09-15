import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "       Curso APIs\n    Parcial Práctico\nJosé Libardo López Lesmes"', () => {
      expect(appController.getHello()).toBe('       Curso APIs\n    Parcial Práctico\nJosé Libardo López Lesmes');
    });
  });
});
