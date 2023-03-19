import { Request, Response } from "express";
import { deleteChef, getChefs } from "../../services/chefService/chefs.service"

export const getAllChefs = async (req: Request, res: Response) => {
    try {
        const chefs = await getChefs()
        return res
        .status(200)
        .json(chefs)
    } catch (e: any) {
        throw e;
    }
}

export const deleteOneChef = async (req: Request, res: Response) => {
    try {
        const chef = await deleteChef(req.params.id)
        return res
        .status(200)
        .json(chef)
    } catch (e: any) {
        throw e;
    }
}