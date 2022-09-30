import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// ↓の引数にパスプレフィックスをつけることで、関連する複数のルートをグルーピングできる
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  getGreet(): string {
    return this.appService.getHello();
  }
}
