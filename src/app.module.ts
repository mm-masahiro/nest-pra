import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { services } from './services';
import { controllers } from './controllers';

@Module({
  imports: [],
  controllers: [AppController, ...controllers],
  providers: [AppService, ...services],
})
export class AppModule {}
