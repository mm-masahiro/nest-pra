import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// ↓の引数にパスプレフィックスをつけることで、関連する複数のルートをグルーピングできる
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // /app/hello
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  // /app/greet
  @Get('greet')
  getGreet(): string {
    return this.appService.getHello();
  }
}
