import {Prop,Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema({collection:'userInfo',timestamps:true})
export class User extends Document{
    @Prop({required:false})
    name: string;
    @Prop()
    ID:string;
    @Prop()
    category:string;
    @Prop()
    phone:string;
    @Prop()
    status:string;
    @Prop()
    password: string;
    @Prop()
    drivingSchool: string;
    @Prop({
        type:{
            subjectOne:{
                type:Number,
                get:(val: number) => val.toFixed(2),
                set:(val:number)=>parseFloat(val.toFixed(2)),
                default:0.00
            },
            subjectTwo:{
                type:Number,
                get:(val: number) => val.toFixed(2),
                set:(val:number)=>parseFloat(val.toFixed(2)),
                default:0.00
            },
            subjectThree:{
                type:Number,
                get:(val: number) => val.toFixed(2),
                set:(val:number)=>parseFloat(val.toFixed(2)),
                default:0.00
            },
        },
        _id:false
    })
    subjectHours:{
        subjectOne:Number,
        subjectTwo:Number,
        subjectThree:Number
    }
    @Prop({type:Date,default:()=>Date.now()})
    updatedAt:Date
}
export type UserDocument = User &Document;
export const UserSchema =SchemaFactory.createForClass(User)