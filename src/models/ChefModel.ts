import { Schema } from 'mongoose'
import mongoose from "mongoose";

export interface IChef {
  id: number
  firstName: string
  lastName: string
  info?: string
  img: string
  restaurants: number[]
  isChefOfTheWeek: Boolean
  isNew?: Boolean
  mostViewed?: Boolean
}

export const chefSchema = new Schema<IChef>({
  id: {type: Number, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  info: { type: String },
  img: {type: String, required: true },
  restaurants: { type: Schema.Types.Mixed, required: true },
  isChefOfTheWeek: { type: Boolean, required: true },
  isNew: { type: Boolean },
  mostViewed: { type: Boolean }
}, { suppressReservedKeysWarning: true })

export const ChefModel = mongoose.model<IChef>('chefs', chefSchema)
