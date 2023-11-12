import { Router }         from 'express';
import { authController } from '@controllers/auth.controller';

export const authRoute = Router();

authRoute.get('/signin', authController.signIn);
authRoute.get('/signup', authController.signUp);
