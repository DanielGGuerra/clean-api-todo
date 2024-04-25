import express, { Router } from 'express';
import { createTaskControllerFactory } from './factories/create-task.factory';

export function setupRouter(): Router {
  const router = express.Router();

  router.post('/create-task', createTaskControllerFactory);

  return router;
}
