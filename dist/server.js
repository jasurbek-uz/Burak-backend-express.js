"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("EXUCUTED");
const moment_1 = __importDefault(require("moment"));
const currenTime = (0, moment_1.default)().format("YYYY MM DD");
console.log(currenTime);
const person = "Martin";
const count = 100;
