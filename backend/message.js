import express from 'express';
import { addMessage } from './controllers/messageController';
let messageRouter = express.Router();

messageRouter.get('/messages', addMessage);

export default messageRouter;
