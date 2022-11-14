"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.create = void 0;
require("reflect-metadata"); // Estucutra orientada a objetos
const typedi_1 = __importDefault(require("typedi"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const film_1 = require("./controller/film");
const dotenvPath = path_1.default.join(__dirname, "../", `config/.env.${process.env.NODE_ENV}`);
dotenv_1.default.config({
    path: dotenvPath,
});
const filmController = typedi_1.default.get(film_1.FilmController);
exports.create = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return filmController.create(event);
};
exports.show = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return filmController.show(event);
};
//# sourceMappingURL=handler.js.map