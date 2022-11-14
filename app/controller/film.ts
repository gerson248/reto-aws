import { APIGatewayEvent } from "aws-lambda";
import { MessageUtil, parseValidationErrors } from "../utils/message";
import { Service } from "typedi";
import { FilmRegisterDTO } from "../model/dto/filmRegister.dto";
import { validate } from "class-validator";
import { FilmService } from "../service/film.service";

@Service()
export class FilmController {
  constructor(private service: FilmService) {}

  async create(event: APIGatewayEvent): Promise<MessageUtil> {
    const params: FilmRegisterDTO = JSON.parse(event.body);
    try {
      const valueDto = new FilmRegisterDTO(params);
      const dtoValidation = await validate(valueDto);
      if (dtoValidation && dtoValidation.length > 0) {
        const errors = parseValidationErrors(dtoValidation);
        return MessageUtil.error(404, errors);
      }
      const response = await this.service.create(params);
      return MessageUtil.success(response);
    } catch (error) {
      console.error(error);
      return MessageUtil.error(error.code, error.message);
    }
  }

  async show(event: APIGatewayEvent): Promise<MessageUtil> {
    const { id } = event.pathParameters
    try {
      const response = await this.service.show(id);
      return MessageUtil.success(response);
    } catch (error) {
      console.error(error);
      return MessageUtil.error(error.code, error.message);
    }
  }
}
