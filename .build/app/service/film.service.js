"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmService = void 0;
const typedi_1 = require("typedi");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const dynamo_db_1 = __importDefault(require("../model/dynamo-db"));
const uuid_1 = require("uuid");
let FilmService = class FilmService {
    async create(params) {
        try {
            const uuid = uuid_1.v4();
            const result = await dynamo_db_1.default.send(new lib_dynamodb_1.PutCommand({
                TableName: "FilmsTable",
                Item: { id: uuid, params },
            }));
            return result;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async show(id) {
        try {
            const result = await dynamo_db_1.default.send(new lib_dynamodb_1.GetCommand({
                TableName: "FilmsTable",
                Key: { id },
            }));
            return result?.Item;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
FilmService = __decorate([
    typedi_1.Service()
], FilmService);
exports.FilmService = FilmService;
//# sourceMappingURL=film.service.js.map