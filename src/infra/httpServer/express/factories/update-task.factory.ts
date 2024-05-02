import { Request, Response } from 'express';
import { taskRepository } from './task-respository.factory';
import { UpdateTaskUseCase } from '../../../../domain/use-cases/update-task.use-case';
import { UpdateTaskController } from '../../../../adapters/controllers/update-task.controller';

export async function updateTaskControllerFactory(
  request: Request,
  response: Response,
): Promise<void> {
  const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
  const updateTaskController = new UpdateTaskController(updateTaskUseCase);

  const responseController = await updateTaskController.handle({
    body: request.body,
    params: request.params,
  });

  response.status(responseController.statusCode).json(responseController);
}
