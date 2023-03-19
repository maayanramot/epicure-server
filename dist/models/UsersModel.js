"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.userSchema = new mongoose_1.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});
exports.UserModel = mongoose_2.default.model('users', exports.userSchema);
