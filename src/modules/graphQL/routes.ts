import { Application, Router } from 'express';
import GraphQL_Learning from './controller';

export default class GraphQLRoutes {
  public routes(app: Application): void {
    const router = Router();
    app.use('/graphQL/', router);

    const graphQLController = new GraphQL_Learning();

    router.route('/').post(graphQLController.recentOrderMessages);
  }
}
