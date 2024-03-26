import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/userInfo'),
    UserModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
