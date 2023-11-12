import { Router }           from 'express';
import { authorize }        from '@middleware/auth.middleware';
import { validate }         from '@middleware/validation.middleware';
import { selfController }   from '@controllers/self.controller';
import { updateSelfSchema } from '@schemas/self.schema';

export const selfRoute = Router();

selfRoute.get('/', authorize, selfController.getSelf);
selfRoute.patch('/', authorize, validate(updateSelfSchema), selfController.updateSelf);
selfRoute.delete('/', authorize, selfController.deleteSelf);
