"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDish = exports.getDishes = void 0;
const DishModel_1 = require("../../models/DishModel");
const getDishes = async () => {
    try {
        const dishes = await DishModel_1.DishModel.find();
        return dishes;
    }
    catch (e) {
        throw Error('Error while Paginating Dishes');
    }
};
exports.getDishes = getDishes;
const deleteDish = async (id) => {
    try {
        const dish = await DishModel_1.DishModel.findByIdAndDelete(id);
        if (!dish) {
            throw Error('Dish not found');
        }
        else {
            console.log(dish, 'Dish deleted');
        }
    }
    catch (e) {
        throw Error('Error while tring delete Dish');
    }
};
exports.deleteDish = deleteDish;
