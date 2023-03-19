import { Schema } from 'mongoose'
import mongoose from "mongoose";

export interface IUser {
    firstName?: string
    lastName?: string
    email:string
    password:string
    token?:string
}

export const userSchema = new Schema<IUser>({
    firstName:{type:String},
    lastName:{type:String},
    email: {type:String, unique:true, required:true},
    password: {type:String, required:true},
    token: {type:String}
})

export const UserModel = mongoose.model<IUser>('users', userSchema)