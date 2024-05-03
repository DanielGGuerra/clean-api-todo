import { Request, Response } from 'express';
import { DeleteTaskController } from '../../../../adapters/controllers/delete-task.controller';
import { DeleteTaskUseCase } from '../../../../domain/use-cases/delete-task.use-case';
import { taskRepository } from './task-respository.factory';

export async function deleteTaskControllerFactory(
  request: Request,
  response: Response,
): Promise<void> {
  const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
  const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

  const responseController = await deleteTaskController.handle({
    params: request.params,
  });

  response.status(responseController.statusCode).json(responseController);
}
