"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    decription: {
        type: String,
        required: [false, "You skipped"]
    },
    isDone: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date.now()
    },
});
const TodoList = mongoose_1.default.model("TodoList", todoSchema);
exports.default = TodoList;
