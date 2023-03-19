import { Schema } from 'mongoose'
import mongoose from "mongoose";

export interface IRestaurant {
  id: number
  img: string
  name: string
  chef: string
  dishes: number[]
  rating?: number
  isPopular?: Boolean
  isNew?: Boolean
  OpeningTime: number
  ClosingTime:number
  address?: number[]
}

export const restaurantSchema = new Schema<IRestaurant>({
  id: {type: Number, required: true},
  img: {type: String, required: true},
  name: { type: String, required: true },
  chef: { type: String, required: true },
  dishes: { type: Schema.Types.Mixed, required: true },
  rating: {type: Number },
  isPopular: {type: Boolean },
  isNew: { type: Boolean },
  OpeningTime: {type: Number, required:true },
  ClosingTime: { type: Number, required:true },
  address: {type: Schema.Types.Mixed },
}, { suppressReservedKeysWarning: true })

export const RestaurantModel = mongoose.model<IRestaurant>('restaurants', restaurantSchema)
