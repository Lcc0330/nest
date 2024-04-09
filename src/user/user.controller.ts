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
      const findResult=await this.userService.findOne({ID:createItemDto?.ID})
      if (findResult && Object.keys(findResult).length) {
        return {success:false, data:'新增失败，ID重复'}
      }
        const result =await this.userService.create(createItemDto)
        if (!result || Object.keys(result).length === 0) {
          return {success:false, data:'新增失败'}
        }
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
        console.log(queryOption,'queryOption',params,result)
        if (!result || Object.keys(result).length === 0) {
          return  {success:false, data:'未查询到数据'}
        }
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
        if (!result || Object.keys(result).length === 0) {
          return {success:false, data:'更新失败'}
        }
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
        if (!result || Object.keys(result).length === 0) {
          return {success:false, data:'删除失败'}
        }
        return{success:true, data:result}
    } catch (error) {
        throw new HttpException({
            success:false, message:error.message
        },HttpStatus.BAD_REQUEST)
    }
  }
}
