"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurants_controllers_1 = require("../../controllers/restaurantsController/restaurants.controllers");
const restaurantsRouter = express_1.default.Router();
restaurantsRouter.get("/", restaurants_controllers_1.getAllRestaurants);
exports.default = restaurantsRouter;
