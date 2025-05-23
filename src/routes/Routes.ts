import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { addPizza } from '../application/useCases/Composers/IAddPizzaComposer';
import { selectPizza } from '../application/useCases/Composers/ISelectPizzaComposer';
import { selectMenu } from '../application/useCases/Composers/ISelectMenuComposer';


export class Routes {
    constructor(
        private readonly app: FastifyInstance
    ) {}

    setupRoutes() {
        this.app.post('/api/pizzas/add', async (req: FastifyRequest, res: FastifyReply) => {
            await addPizza.handle(req, res);
        });

        this.app.get('/api/pizzas/select/:public_id', async (req: FastifyRequest, res: FastifyReply) => {
            await selectPizza.handle(req, res);
        });

        this.app.get('/api/pizzas/menu/:page', async (req: FastifyRequest, res: FastifyReply) => {
            await selectMenu.handle(req, res);
        });
    }
}