"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDishes = void 0;
const dish_service_1 = require("../../services/dishService/dish.service");
const getAllDishes = async (req, res) => {
    try {
        const dishes = await (0, dish_service_1.getDishes)();
        return res
            .status(200)
            .json(dishes);
    }
    catch (e) {
        throw e;
    }
};
exports.getAllDishes = getAllDishes;
