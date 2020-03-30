import express from 'express';
import { add, getAll, findById } from '../backend/controllers/playerController';
let playerRouter = express.Router();

playerRouter.post('/', add);
playerRouter.get('/', getAll);
playerRouter.get('/', findById);
/* playerRouter.get('/', deleteById);
playerRouter.get('/', update); */

export default playerRouter;
