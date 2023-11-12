import { type Request, type Response } from 'express';
import { type User }                   from '@prisma/client';
import { userService }                 from '@services/user.service';
import { ProfileDTO }                  from '@dtos/user.dto';

class SelfController {
  public async getSelf (request: Request, response: Response) {
    const user       = request.user as User;
    const profileDTO = new ProfileDTO(user);

    response.send({ ...profileDTO });
  }

  public async deleteSelf (request: Request, response: Response) {
    const user = request.user as User;

    await userService.deleteUser(user.id);

    response.send({ message: 'Your account was deleted' });
  }
}

export const selfController = new SelfController();
