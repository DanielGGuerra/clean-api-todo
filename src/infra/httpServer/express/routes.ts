import express, { Router } from 'express';
import { createTaskControllerFactory } from './factories/create-task.factory';
import { searchTaskControllerFactory } from './factories/search-taks.factory';

export function setupRouter(): Router {
  const router = express.Router();

  router.get('/task', searchTaskControllerFactory);
  router.post('/task', createTaskControllerFactory);

  return router;
}
