import fastify, { FastifyInstance } from 'fastify';
import { Routes } from './routes/Routes';

class Application {
  constructor(private readonly server: FastifyInstance) {}

  async run() {
    try {
      await this.server
        .listen({
          port: 8000,
          host: '0.0.0.0',
        })
        .then(() => {
          console.log('🚀 Server is Running on http://localhost:8000');
        });
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }
}

const server = fastify();
const routes = new Routes(server);
routes.setupRoutes();
const application: Application = new Application(server);
application.run();


