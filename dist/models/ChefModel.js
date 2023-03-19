"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefModel = exports.chefSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.chefSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    info: { type: String },
    img: { type: String, required: true },
    restaurants: { type: mongoose_1.Schema.Types.Mixed, required: true },
    isChefOfTheWeek: { type: Boolean, required: true },
    isNew: { type: Boolean },
    mostViewed: { type: Boolean }
}, { suppressReservedKeysWarning: true });
exports.ChefModel = mongoose_2.default.model('chefs', exports.chefSchema);
