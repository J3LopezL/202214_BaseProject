import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '       Curso APIs\n    Parcial Práctico\nJosé Libardo López Lesmes';
  }
}
