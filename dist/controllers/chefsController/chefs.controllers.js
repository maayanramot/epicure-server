"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneChef = exports.getAllChefs = void 0;
const chefs_service_1 = require("../../services/chefService/chefs.service");
const getAllChefs = async (req, res) => {
    try {
        const chefs = await (0, chefs_service_1.getChefs)();
        return res
            .status(200)
            .json(chefs);
    }
    catch (e) {
        throw e;
    }
};
exports.getAllChefs = getAllChefs;
const deleteOneChef = async (req, res) => {
    try {
        const chef = await (0, chefs_service_1.deleteChef)(req.params.id);
        // if (!chef) throw Error('Chef not found')
        return res
            .status(200)
            .json(chef);
    }
    catch (e) {
        throw e;
    }
};
exports.deleteOneChef = deleteOneChef;
