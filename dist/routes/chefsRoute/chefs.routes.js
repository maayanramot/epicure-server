"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chefs_controllers_1 = require("../../controllers/chefsController/chefs.controllers");
const chefsRouter = express_1.default.Router();
chefsRouter.get("/", chefs_controllers_1.getAllChefs);
chefsRouter.delete("/:id", chefs_controllers_1.deleteOneChef);
exports.default = chefsRouter;
