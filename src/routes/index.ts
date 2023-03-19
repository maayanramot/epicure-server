import express from "express"
import chefsRouter from '../routes/chefsRoute/chefs.routes'
import restaurantsRouter from '../routes/restaurantsRoute/restaurant.routes'
import dishesRouter from '../routes/dishesRoute/dishes.routes'
import usersRouter from "./usersRoute/users.routes";

const router = express.Router();

router.use("/epicure/restaurants", restaurantsRouter)
router.use("/epicure/chefs", chefsRouter)
router.use("/epicure/dishes", dishesRouter)
router.use("/epicure/users",usersRouter )

export default router

