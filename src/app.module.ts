import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://47.99.117.111:27017/userInfo'),
    UserModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
