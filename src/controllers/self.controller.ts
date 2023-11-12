import { type Request, type Response } from 'express';
import { type User }                   from '@prisma/client';
import { userService }                 from '@services/user.service';
import { ProfileDTO }                  from '@dtos/user.dto';
import { IUpdateSelfSchema }           from '@schemas/self.schema';

class SelfController {
  public async getSelf (request: Request, response: Response) {
    const user       = request.user as User;
    const profileDTO = new ProfileDTO(user);

    response.send({ ...profileDTO });
  }

  public async updateSelf (request: Request, response: Response) {
    const user = request.user as User;
    const data = request.body as IUpdateSelfSchema;

    if (data.email !== undefined) {
      const userWithSuchEmail = await userService.findUserByEmail(data.email);
      if (userWithSuchEmail !== null) {
        return response.status(400).send({
          code   : 'email-not-unique',
          message: 'Email is not unique',
        });
      }
    }

    const updatedSelf = await userService.updateUserById(user.id, data);
    const profileDTO  = new ProfileDTO(updatedSelf);

    response.send({ ...profileDTO });
  }

  public async deleteSelf (request: Request, response: Response) {
    const user = request.user as User;

    await userService.deleteUser(user.id);

    response.send({ message: 'Your account was deleted' });
  }
}

export const selfController = new SelfController();
