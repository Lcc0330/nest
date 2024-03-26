import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema,User } from './schemas/user.schema';

@Module({
  providers: [
    // MongooseModule.forRoot('mongodb://localhost:27017/userInfo'),
    UserService],
  // exports:[UserService],
  imports:[
    // MongooseModule.forRoot('mongodb://localhost:27017/userInfo'),
    MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
    // MongooseModule.forFeature({schema:UserSchema}),

  ],
  controllers: [UserController]
})
export class UserModule {}
