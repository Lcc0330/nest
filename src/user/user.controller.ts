import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  HttpException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './schemas/user.schema'
import { Post as PosDocument } from './user.schema'
import { MyUtility } from 'src/untils/untils'
@Controller('userInfo')
export class UserController {
  constructor (private userService: UserService) {}
  @Get('findAll')
  async findAll (
  ): Promise<{ success: boolean; data: User[] | string }> {
    try {
        const result =await this.userService.findAll() 
        return{success:true, data:result}
    } catch (error) {
        throw new HttpException({
            success:false, message:error.message
        },HttpStatus.BAD_REQUEST)
    }
  }

  @Post('create')
  async create (
    @Body() createItemDto: any,
  ): Promise<{ success: boolean; data: User|string }> {
    try {
        const result =await this.userService.create(createItemDto)
        return{success:true, data:result}
    } catch (error) {
        throw new HttpException({
            success:false, message:error.message
        },HttpStatus.BAD_REQUEST)
    }
  }

  @Post('findOne')
  async findOne (
    @Body() params: Object,
  ): Promise<{ success: boolean; data: User|string |unknown  }> {
    try {
        const queryOption= MyUtility.filterObject(params)
        const result =await this.userService.findOne(queryOption)

        return{success:true, data:result}
    } catch (error) {
        throw new HttpException({
            success:false, message:error.message
        },HttpStatus.BAD_REQUEST)
    }
  }
  @Put('update')
  async update (
    @Body() params: any,
  ): Promise<{ success: boolean; data: User|string |unknown  }> {
    try {
        const {ID,updateItemDto}=params
        const result =await this.userService.update(ID,updateItemDto)

        return{success:true, data:result}
    } catch (error) {
        throw new HttpException({
            success:false, message:error.message
        },HttpStatus.BAD_REQUEST)
    }
  }

  @Delete('delete')
  async delete (
    @Body() params: any,
  ): Promise<{ success: boolean; data: User|string |unknown  }> {
    try {
        const result =await this.userService.delete(params)

        return{success:true, data:result}
    } catch (error) {
        throw new HttpException({
            success:false, message:error.message
        },HttpStatus.BAD_REQUEST)
    }
  }
}
