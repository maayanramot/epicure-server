"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishModel = exports.dishSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.dishSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    img: { type: String, required: true },
    name: { type: String },
    restaurant: { type: String },
    ingredients: { type: String },
    isSpicy: { type: Boolean },
    isVegi: { type: Boolean },
    isVegan: { type: Boolean },
    price: { type: Number },
    optionalSides: { type: mongoose_1.Schema.Types.Mixed },
    optionalChanges: { type: mongoose_1.Schema.Types.Mixed },
    isPopular: { type: Boolean },
});
exports.DishModel = mongoose_2.default.model('dishes', exports.dishSchema);
