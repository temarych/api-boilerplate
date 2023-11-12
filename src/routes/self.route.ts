import { Router }         from 'express';
import { selfController } from '@controllers/self.controller';
import { authorize }      from '@middleware/auth.middleware';

export const selfRoute = Router();

selfRoute.use(authorize);

selfRoute.get('/', selfController.getSelf);
selfRoute.delete('/', selfController.deleteSelf);
