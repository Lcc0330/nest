import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from './schemas/user.schema'

@Injectable()
export class UserService {
  constructor (@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async findAll () {
    try {
      const users = await this.userModel.find({}).sort({ updatedAt: -1 }).exec()
      console.log(users, 'service findeall')
      return users
    } catch (error) {
      throw error
    }
  }

  async findOne (param: any) {
    try {
      const result = await this.userModel
        .find(param)
        .sort({ updatedAt: -1 })
        .exec()
      
      console.log(result,'findOne result')
      return result
    } catch (error) {
      console.log(error,'findOne')
      throw error
    }
  }

  async create (createItemDto: any) {
    try {
      
      const createItem = new this.userModel(createItemDto)
      const result = await createItem.save()
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  async delete (id: any) {
    try {
      const result = await this.userModel.findOneAndDelete(id).exec()
      
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async update (id, updateItemDto: any) {
    try {
      const result = await this.userModel
        .findOneAndUpdate({ ID: id }, updateItemDto, { new: true })
        .exec()
      
      return result
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
