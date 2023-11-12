import { Request, Response } from 'express';

class AuthController {
  public async signIn(request: Request, response: Response) {
    response.send('Sign in');
  }

  public async signUp(request: Request, response: Response) {
    response.send('Sign up');
  }
}

export const authController = new AuthController();
