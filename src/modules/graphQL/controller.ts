import { NextFunction, Request, Response } from 'express';

export default class GraphQL_Learning {
  public recentOrderMessages = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).send({
        success: true
      });
    } catch (error) {
      next(error);
    }
  };
}
