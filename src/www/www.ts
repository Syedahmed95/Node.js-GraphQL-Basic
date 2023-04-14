import app from '../app';
import http from 'http';
import { apolloServerCreate } from '../common/graphQL_setup';

const createServer = http.createServer(app);
apolloServerCreate(createServer);
const port = process.env.PORT || 5500;
createServer.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
