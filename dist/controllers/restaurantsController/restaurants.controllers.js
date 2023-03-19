"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRestaurants = void 0;
const restaurant_service_1 = require("../../services/restaurantService/restaurant.service");
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await (0, restaurant_service_1.getRestaurants)();
        return res
            .status(200)
            .json(restaurants);
    }
    catch (e) {
        throw e;
    }
};
exports.getAllRestaurants = getAllRestaurants;
