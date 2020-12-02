import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
  console.log("here");
  console.log(req.body.userJwt)
  if (!req.body?.userJwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
        req.body.userJwt,
      process.env.JWT_KEY!
    ) as UserPayload;

    req.currentUser = payload;
  } catch (err) {}

  next();
};
