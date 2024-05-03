import express, { Router } from 'express';
import { createTaskControllerFactory } from './factories/create-task.factory';
import { searchTaskControllerFactory } from './factories/search-taks.factory';
import { updateTaskControllerFactory } from './factories/update-task.factory';
import { deleteTaskControllerFactory } from './factories/delete-task.factory';

export function setupRouter(): Router {
  const router = express.Router();

  router.get('/task', searchTaskControllerFactory);
  router.post('/task', createTaskControllerFactory);
  router.patch('/task/:id', updateTaskControllerFactory);
  router.delete('/task/:id', deleteTaskControllerFactory);

  return router;
}
