import { Request, Response } from 'express';
import { CreateTaskUseCase } from '../../../../domain/use-cases/create-task.use-case';
import { CreateTaskController } from '../../../../adapters/controllers/create-task.controller';
import { taskRepository } from './task-respository.factory';

export async function createTaskControllerFactory(
  request: Request,
  response: Response,
): Promise<void> {
  const createTaskUseCase = new CreateTaskUseCase(taskRepository);
  const createTaskController = new CreateTaskController(createTaskUseCase);

  const responseController = await createTaskController.handle({
    body: request.body,
  });
  response.status(responseController.statusCode).json(responseController);
}
