import { Request, Response } from "express";
import { deleteRestaurant, getRestaurants } from "../../services/restaurantService/restaurant.service";

export const getAllRestaurants = async (req: Request, res: Response) => {
    try {
        const restaurants = await getRestaurants()
        return res
        .status(200)
        .json(restaurants)
    } catch (e: any) {
        throw e;
    }
}

export const deleteOneRestaurant = async (req: Request, res: Response) => {
    try {
        const restaurant = await deleteRestaurant(req.params.id)
        return res
        .status(200)
        .json(restaurant)
    } catch (e: any) {
        throw e;
    }
}