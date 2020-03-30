import express from 'express';
import { getAllUsers } from './controllers/userController';
let userRouter = express.Router();

userRouter.get('/', getAllUsers);

export default userRouter;
