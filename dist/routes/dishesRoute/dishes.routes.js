"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dishes_controllers_1 = require("../../controllers/dishesController/dishes.controllers");
const dishesRouter = express_1.default.Router();
dishesRouter.get("/", dishes_controllers_1.getAllDishes);
exports.default = dishesRouter;
