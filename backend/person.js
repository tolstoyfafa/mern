import express from 'express';
import { signUp, login, isAuthenticated } from './controllers/authenticationController';
import { getAll } from './controllers/playerController';

let personRouter = express.Router();

personRouter.post('/', signUp);
personRouter.get('/login', login);
personRouter.get('/persons', isAuthenticated, getAll);

export default personRouter;
