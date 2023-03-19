import express from "express"
import { deleteOneDish, getAllDishes } from "../../controllers/dishesController/dishes.controllers"

const dishesRouter = express.Router();

dishesRouter.get("/", getAllDishes);
dishesRouter.delete("/:id", deleteOneDish)

export default dishesRouter;