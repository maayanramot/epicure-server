"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurant = exports.getRestaurants = void 0;
const RestaurantModel_1 = require("../../models/RestaurantModel");
const getRestaurants = async () => {
    try {
        const restaurants = await RestaurantModel_1.RestaurantModel.find();
        return restaurants;
    }
    catch (e) {
        throw Error('Error while paginating Restaurants');
    }
};
exports.getRestaurants = getRestaurants;
const deleteRestaurant = async (id) => {
    try {
        const restaurant = await RestaurantModel_1.RestaurantModel.findByIdAndDelete(id);
        if (!restaurant) {
            throw Error('Restaurant not found');
        }
        else {
            console.log(restaurant, 'Restaurant deleted');
        }
    }
    catch (e) {
        throw Error('Error while tring delete Restaurant');
    }
};
exports.deleteRestaurant = deleteRestaurant;
