import { Service } from "typedi";
import { GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { FilmRegisterDTO } from "../model/dto/filmRegister.dto";
import ddbDocClient from "../model/dynamo-db";
import { v4 as uuidv4 } from "uuid";

@Service()
export class FilmService {
  async create(params: FilmRegisterDTO): Promise<any> {
    try {
      const uuid = uuidv4();
      const result = await ddbDocClient.send(
        new PutCommand({
          TableName: "FilmsTable",
          Item: { id: uuid, params },
        })
      );
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async show(id: string): Promise<any> {
    try {
      const result = await ddbDocClient.send(
        new GetCommand({
          TableName: "FilmsTable",
          Key: { id },
        })
      );
      return result?.Item;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
