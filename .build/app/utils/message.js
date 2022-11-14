"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseValidationErrors = exports.MessageUtil = exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["success"] = 200] = "success";
    StatusCode[StatusCode["badRequest"] = 400] = "badRequest";
    StatusCode[StatusCode["conflict"] = 409] = "conflict";
    StatusCode[StatusCode["notFound"] = 404] = "notFound";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
class Result {
    constructor(statusCode, data) {
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
class MessageUtil {
    static success(data) {
        const result = new Result((data.response === 'SUCCESS') ? data.statusCode = 200 : data.statusCode = data.statusCode, data);
        return result.bodyToString();
    }
    static error(code, message) {
        const result = new Result(code, message);
        console.log(result.bodyToString());
        return result.bodyToString();
    }
}
exports.MessageUtil = MessageUtil;
exports.parseValidationErrors = (errors) => {
    const errorMessages = errors.reduce((acc, element) => {
        const property = Object.values(element.constraints).reduce((_, valueproperty) => {
            return valueproperty;
        }, '');
        return `${acc} ${acc ? '-- ' : ''}${property}`;
    }, '');
    return `Required fields: ${errorMessages}`;
};
//# sourceMappingURL=message.js.map