import { Request, Response } from "express";
import { deleteDish, getDishes } from "../../services/dishService/dish.service";

export const getAllDishes = async (req: Request, res: Response) => {
    try {
        const dishes = await getDishes()
        return res
        .status(200)
        .json(dishes)
    } catch (e: any) {
        throw e;
    }
}

export const deleteOneDish = async (req: Request, res: Response) => {
    try {
        const dish = await deleteDish(req.params.id)
        return res
        .status(200)
        .json(dish)
    } catch (e: any) {
        throw e;
    }
}