import { Request, Response } from 'express';
import TodoList from '../models/todoModel';

const createTodo = async (req: Request, res: Response): Promise<Response> => {
  const item = await TodoList.create(req.body);
  return res.status(200).send({ item });
};

const getAllTodo = async (req: Request, res: Response): Promise<Response> => {
  const item = await TodoList.find({}).sort('name');
  if (!item) {
    res.status(200).json({
      message: 'No List Found',
      data: null
    });
  }
  return res.status(200).send({
    message: 'Success',
    data: item
  });
};

const getAnItem = async (req: Request, res: Response): Promise<Response> => {
  const itemId = req.params.id;
  const item = await TodoList.findById({ _id: itemId });
  if (!item) {
    return res.status(404).send({
      message: `The item with ${itemId} is not Found`,
      data: null
    });
  }
  return res.status(200).send({
    message: 'Item Successfully fetched',
    data: item
  });
};
const deleteTodo = async (req: Request, res: Response): Promise<Response> => {
  const todoId = req.params.id;
  const item = await TodoList.findByIdAndDelete({ _id: todoId });
  if (!item) {
    return res.status(404).send({
      message: `The item with ${todoId} is not Found`,
      data: item
    });
  }
  return res.status(200).send({
    message: `Item with the Id: ${todoId} is successfully deleted`,
    data: item
  });
};

const updateTodo = async (req: Request, res: Response): Promise<Response> => {
  const todoId = req.params.id;
  const Body = req.body;
  const item = await TodoList.findByIdAndUpdate({ _id: todoId }, Body, {
    new: true,
    runValidators: true
  });
  return res.status(200).send({
    message: 'Item properity Successfully Updated',
    data: item
  });
};
export { createTodo, getAllTodo, deleteTodo, updateTodo, getAnItem };
