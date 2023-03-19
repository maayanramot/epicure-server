"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chefs_routes_1 = __importDefault(require("../routes/chefsRoute/chefs.routes"));
const restaurant_routes_1 = __importDefault(require("../routes/restaurantsRoute/restaurant.routes"));
const dishes_routes_1 = __importDefault(require("../routes/dishesRoute/dishes.routes"));
const users_routes_1 = __importDefault(require("./usersRoute/users.routes"));
const router = express_1.default.Router();
router.use("/epicure/restaurants", restaurant_routes_1.default);
router.use("/epicure/chefs", chefs_routes_1.default);
router.use("/epicure/dishes", dishes_routes_1.default);
router.use("/epicure/users", users_routes_1.default);
exports.default = router;
