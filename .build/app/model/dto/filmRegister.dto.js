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
exports.FilmRegisterDTO = void 0;
const class_validator_1 = require("class-validator");
const typedi_1 = require("typedi");
let FilmRegisterDTO = class FilmRegisterDTO {
    constructor(params) {
        const { title, opening_crawl, episode_id, url, vehicles } = params;
        this.title = title;
        this.opening_crawl = opening_crawl;
        this.episode_id = episode_id;
        this.url = url;
        this.vehicles = vehicles;
    }
};
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], FilmRegisterDTO.prototype, "title", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], FilmRegisterDTO.prototype, "opening_crawl", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], FilmRegisterDTO.prototype, "episode_id", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], FilmRegisterDTO.prototype, "url", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], FilmRegisterDTO.prototype, "vehicles", void 0);
FilmRegisterDTO = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [Object])
], FilmRegisterDTO);
exports.FilmRegisterDTO = FilmRegisterDTO;
//# sourceMappingURL=filmRegister.dto.js.map