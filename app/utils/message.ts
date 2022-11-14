import { ResponseVO } from '../model/vo/responseVo';
import { ValidationError } from 'class-validator';

export enum StatusCode {
  success = 200,
  badRequest = 400,
  conflict = 409,
  notFound = 404
}

class Result {
  private statusCode: number;
  private data?: any;

  constructor(statusCode: number, data?: any) {
    this.statusCode = statusCode;
    this.data = data;
  }

  /**
   * Serverless: According to the API Gateway specs, the body content must be stringified
   */
  bodyToString() {
    return {
      statusCode: this.statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        data: this.data,
      }),
    };
  }
}

export class MessageUtil {
  static success(data: any): ResponseVO {
    const result = new Result(
      (data.response === 'SUCCESS')?data.statusCode=200:data.statusCode= data.statusCode,
      data,
    );

    return result.bodyToString();
  }

  static error(code: any, message: string) {
    const result = new Result(code, message);

    console.log(result.bodyToString());
    return result.bodyToString();
  }
}

export const parseValidationErrors = (errors: ValidationError[]): string => {
  const errorMessages = errors.reduce((acc, element) => {
    const property = Object.values(element.constraints).reduce(
      (_, valueproperty) => {
        return valueproperty;
      },
      '',
    );
    return `${acc} ${acc ? '-- ' : ''}${property}`;
  }, '');
  return `Required fields: ${errorMessages}`;
};
