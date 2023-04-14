import { Application } from 'express';
import GraphQLRoutes from './graphQL/routes';

export default class Routes {
  public routesInitialize(app: Application): void {
    const graphQLRoutes = new GraphQLRoutes();

    graphQLRoutes.routes(app);
  }
}
