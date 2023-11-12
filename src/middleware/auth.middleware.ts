import { Request, Response, NextFunction }      from 'express';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { verifyToken }                          from '@utils/token';
import { prisma }                               from '@/index';

export const authorize = async (
  request : Request,
  response: Response,
  next    : NextFunction,
) => {
  try {
    const accessToken = request.headers.authorization;

    if (accessToken === undefined) {
      return response.status(401).send({
        code   : 'no-jwt',
        message: 'No access token provided',
      });
    }

    const id   = verifyToken(accessToken);
    const user = await prisma.user.findFirst({ where: { id } });

    if (user === null) {
      return response.status(401).send({
        code   : 'jwt-invalid',
        message: 'Access token is not valid',
      });
    }

    request.user = user;

    return next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return response.status(401).send({
        code   : 'jwt-expired',
        message: 'Access token is expired',
      });
    }

    if (error instanceof JsonWebTokenError) {
      return response.status(401).send({
        code   : 'jwt-invalid',
        message: 'Access token is not valid',
      });
    }

    throw error;
  }
};
