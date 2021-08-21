import { ValidationError } from 'express-validator';
import { CustomError } from './customError';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super();

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeError() {
    return this.errors.map(err => {
      return { message: err.msg, field: err.param };
    });
  }
}