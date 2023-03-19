import express from "express"
import { deleteOneRestaurant, getAllRestaurants } from "../../controllers/restaurantsController/restaurants.controllers"

const restaurantsRouter = express.Router();

restaurantsRouter.get("/", getAllRestaurants);
restaurantsRouter.delete("/:id", deleteOneRestaurant)

export default restaurantsRouter