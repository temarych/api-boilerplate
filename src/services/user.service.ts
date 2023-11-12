import { User }   from '@prisma/client';
import { prisma } from '@/index';

class UserService {
  public async findUserByEmail(email: string) {
    return await  prisma.user.findFirst({
      where: { email },
    });
  }

  public async createUser(data: Omit<User, 'id'>) {
    return await prisma.user.create({ data });
  }

  public async updateUserById(id: string, data: Partial<Omit<User, 'id'>>) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  public async deleteUser(id: string) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}

export const userService = new UserService();
