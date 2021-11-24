import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();
import {
  createTodo,
  getAllTodo,
  deleteTodo,
  updateTodo,
  getAnItem
} from '../controllers/controller';

router.get('/', getAllTodo);

router.get('/:id', getAnItem);

router.post('/', createTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router;
