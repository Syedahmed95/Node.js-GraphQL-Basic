import { NextFunction, Request, Response } from 'express';
import httpStatusCode from 'http-status-codes';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization)
    res.status(httpStatusCode.UNAUTHORIZED).send({ message: 'You do not have access to this api' });
  if (req.headers.authorization !== process.env.AUTH_TOKEN_MERCHANTS)
    res.status(httpStatusCode.UNAUTHORIZED).send({ message: 'Invalid Token' });
  next();
};
