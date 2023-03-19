"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantModel = exports.restaurantSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.restaurantSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    img: { type: String, required: true },
    name: { type: String, required: true },
    chef: { type: String, required: true },
    dishes: { type: mongoose_1.Schema.Types.Mixed, required: true },
    rating: { type: Number },
    isPopular: { type: Boolean },
    isNew: { type: Boolean },
    OpeningTime: { type: Number, required: true },
    ClosingTime: { type: Number, required: true },
    address: { type: mongoose_1.Schema.Types.Mixed },
}, { suppressReservedKeysWarning: true });
exports.RestaurantModel = mongoose_2.default.model('restaurants', exports.restaurantSchema);
