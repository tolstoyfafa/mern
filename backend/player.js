import express from 'express';
import { add, getAll, findById, deleteById, update } from './controllers/playerController';
let playerRouter = express.Router();

playerRouter.post('/', add);
playerRouter.get('/', getAll);
playerRouter.get('/:id', findById);
playerRouter.delete('/:id', deleteById);
playerRouter.put('/:id', update);

export default playerRouter;
