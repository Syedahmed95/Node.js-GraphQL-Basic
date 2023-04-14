import { NextFunction, Request, Response } from 'express';
import HttpException from '../common/errorHandler';

export function errorMiddlewareLogging(error: HttpException, req: Request, res: Response, next: NextFunction) {
  if (!(error instanceof HttpException)) {
    throw new HttpException(undefined, `Something went wrong || ${error}`);
  }
  next(error);
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export function errorMiddlewareResponse(error: HttpException, req: Request, res: Response, next: NextFunction) {
  res.status(error.status).send({ message: error.message });
}
