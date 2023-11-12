import { Request, Response }            from 'express';
import bcrypt                           from 'bcrypt';
import { ISignInSchema, ISignUpSchema } from '@schemas/auth.schema';
import { userService }                  from '@services/user.service';
import { createAccessToken }            from '@utils/token';

class AuthController {
  public async signUp (request: Request, response: Response) {
    const data              = request.body as ISignUpSchema;
    const userWithSuchEmail = await userService.findUserByEmail(data.email);

    if (userWithSuchEmail !== null) {
      return response.status(400).send({
        code   : 'email-not-unique',
        message: 'Email is not unique',
      });
    }

    const password    = await bcrypt.hash(data.password, 10);
    const user        = await userService.createUser({ ...data, password });
    const accessToken = createAccessToken(user.id);

    response.send({ accessToken });
  }

  public async signIn (request: Request, response: Response) {
    const data = request.body as ISignInSchema;
    const user = await userService.findUserByEmail(data.email);

    if (user === null) {
      return response.status(404).send({
        code   : 'user-not-found',
        message: 'User not found',
      });
    }

    const isCorrectPassword = await bcrypt.compare(data.password, user.password);

    if (!isCorrectPassword) {
      return response.status(401).send({
        code   : 'invalid-password',
        message: 'Password is not valid',
      });
    }

    const accessToken = createAccessToken(user.id);

    response.send({ accessToken });
  }
}

export const authController = new AuthController();
