import { Router }                     from 'express';
import { authController }             from '@controllers/auth.controller';
import { signInSchema, signUpSchema } from 'schemas/auth.schema';
import { validate }                   from '@middleware/validate.middleware';

export const authRoute = Router();

authRoute.post('/signin', validate(signInSchema), authController.signIn);
authRoute.post('/signup', validate(signUpSchema), authController.signUp);
