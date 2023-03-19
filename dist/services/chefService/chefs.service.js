"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChef = exports.getChefs = void 0;
const ChefModel_1 = require("../../models/ChefModel");
const getChefs = async () => {
    try {
        const chefs = await ChefModel_1.ChefModel.find();
        return chefs;
    }
    catch (e) {
        throw Error('Error while Paginating Chefs');
    }
};
exports.getChefs = getChefs;
const deleteChef = async (id) => {
    try {
        const chef = await ChefModel_1.ChefModel.findByIdAndDelete(id);
        if (!chef) {
            throw Error('Chef not found');
        }
        else {
            console.log(chef, 'chef deleted');
        }
    }
    catch (e) {
        throw Error('Error while tring delete Chef');
    }
};
exports.deleteChef = deleteChef;
