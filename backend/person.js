import express from 'express';
import { signUp } from './controllers/authenticationController';

let personRouter = express.Router();

personRouter.post('/', signUp);

export default personRouter;
