import { config as setupEnv } from 'dotenv-flow';
import http from 'http';

setupEnv();

http
  .createServer((_, res) => {
    res.end();
  })
  .listen(8080);
