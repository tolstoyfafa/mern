import express from 'express';
import { addMessage } from './controllers/messageController';
let messageRouter = express.Router();

messageRouter.post('/', addMessage);

export default messageRouter;
