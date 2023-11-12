import { NextFunction, Request, Response } from 'express';

export const handleError = (
  error   : Error,
  request : Request,
  response: Response,
  next    : NextFunction
) => {
  console.error(error);

  response.status(500).send({
    code : 'internal',
    error: 'Internal server error'
  });

  return next();
};
