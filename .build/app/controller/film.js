"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilmController = void 0;
const message_1 = require("../utils/message");
const typedi_1 = require("typedi");
const filmRegister_dto_1 = require("../model/dto/filmRegister.dto");
const class_validator_1 = require("class-validator");
const film_service_1 = require("../service/film.service");
let FilmController = class FilmController {
    constructor(service) {
        this.service = service;
    }
    async create(event) {
        const params = JSON.parse(event.body);
        try {
            const valueDto = new filmRegister_dto_1.FilmRegisterDTO(params);
            const dtoValidation = await class_validator_1.validate(valueDto);
            if (dtoValidation && dtoValidation.length > 0) {
                const errors = message_1.parseValidationErrors(dtoValidation);
                return message_1.MessageUtil.error(404, errors);
            }
            const response = await this.service.create(params);
            return message_1.MessageUtil.success(response);
        }
        catch (error) {
            console.error(error);
            return message_1.MessageUtil.error(error.code, error.message);
        }
    }
    async show(event) {
        const { id } = event.pathParameters;
        try {
            const response = await this.service.show(id);
            return message_1.MessageUtil.success(response);
        }
        catch (error) {
            console.error(error);
            return message_1.MessageUtil.error(error.code, error.message);
        }
    }
};
FilmController = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [film_service_1.FilmService])
], FilmController);
exports.FilmController = FilmController;
//# sourceMappingURL=film.js.map