"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = (url) => {
    return mongoose_1.default
        .connect(url)
        .then(() => console.log("connected to DB..."))
        .catch((err) => console.log(err));
};
exports.default = connectDB;