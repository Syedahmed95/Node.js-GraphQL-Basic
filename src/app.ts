import express, { Application } from 'express';
import cors from 'cors';
import { errorMiddlewareLogging, errorMiddlewareResponse } from './middlewares/errorMiddleware';
import Routes from './modules/routes';
import { APILogs } from './middlewares/logging';

class App {
  public app: Application;
  private routes = new Routes();
  constructor() {
    this.app = express();
    this.preMiddlewares();
    this.config();
    this.postMiddlewares();
  }
  preMiddlewares() {
    this.app.use(APILogs());
  }
  async config() {
    this.app.use(cors());
    this.app.use(express.json());
    this.routes.routesInitialize(this.app);
  }
  postMiddlewares() {
    this.app.use(errorMiddlewareLogging);
    this.app.use(errorMiddlewareResponse);
  }
}

export default new App().app;
