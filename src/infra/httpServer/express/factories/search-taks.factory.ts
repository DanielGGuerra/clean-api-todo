import { Request, Response } from 'express';
import { SearchTaskController } from '../../../../adapters/controllers/search-task.controller';
import { SearchTaskUseCase } from '../../../../domain/use-cases/search-task.use-case';
import { taskRepository } from './task-respository.factory';

export async function searchTaskControllerFactory(
  request: Request,
  response: Response,
): Promise<void> {
  const searchTaskUseCase = new SearchTaskUseCase(taskRepository);
  const searchTaskController = new SearchTaskController(searchTaskUseCase);

  const responseController = await searchTaskController.handle({
    query: request.query,
  });

  response.status(responseController.statusCode).json(responseController);
}
