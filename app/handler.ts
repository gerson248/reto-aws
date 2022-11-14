import "reflect-metadata"; // Estucutra orientada a objetos
import { APIGatewayEvent, Handler } from "aws-lambda";
import Container from "typedi";
import dotenv from "dotenv";
import path from "path";

import { FilmController } from "./controller/film";

const dotenvPath = path.join(
  __dirname,
  "../",
  `config/.env.${process.env.NODE_ENV}`
);
dotenv.config({
  path: dotenvPath,
});

const filmController = Container.get(FilmController);

export const create: Handler = async (event: APIGatewayEvent, context: any) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return filmController.create(event);
};

export const show: Handler = async (event: APIGatewayEvent, context: any) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return filmController.show(event);
};
