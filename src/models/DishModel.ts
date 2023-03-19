import { Schema } from 'mongoose'
import mongoose from "mongoose";

export interface IDish {
  id: string
  img: string
  name?: string
  restaurant?: string
  ingredients?: string
  isSpicy?: boolean
  isVegi?: boolean
  isVegan?: boolean
  price?: number
  optionalSides?: string[]
  optionalChanges?: string[]
  isPopular?: Boolean
}

export const dishSchema = new Schema<IDish>({
  id: {type: String, required: true},
  img: {type: String, required: true},
  name: { type: String },
  restaurant: { type: String },
  ingredients: { type: String },
  isSpicy: { type: Boolean },
  isVegi: { type: Boolean },
  isVegan: { type: Boolean },
  price: { type: Number },
  optionalSides: { type: Schema.Types.Mixed },
  optionalChanges: { type: Schema.Types.Mixed },
  isPopular: { type: Boolean },
})

export const DishModel = mongoose.model<IDish>('dishes', dishSchema)
