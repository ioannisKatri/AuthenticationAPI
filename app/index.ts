import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoDb from "./configurations/databases/mongoDb";
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './configurations/errors/not-found-error';
import dotEnv from "dotenv";

dotEnv.config()
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  await mongoDb.connect();
  const app = express();
  app.use(json());

  app.use(signinRouter);
  app.use(signoutRouter);
  app.use(currentUserRouter);
  app.use(signupRouter);

  app.all('*', async (req, res) => {
    throw new NotFoundError();
  });

  app.use(errorHandler);
  app.listen(3000, () => {
    console.log('Listening on 3000 port');
  });
};

start();
