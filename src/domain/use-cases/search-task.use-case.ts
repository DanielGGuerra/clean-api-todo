import { ITask } from '../entities/task';
import { ITaksRepository } from '../interfaces/repositories/task.repository';
import {
  ISearchTaskParams,
  ISearchTaskUseCase,
} from '../interfaces/use-cases/search-task.use-case';

export class SearchTaskUseCase implements ISearchTaskUseCase {
  constructor(private readonly taskRepository: ITaksRepository) {}
  async execute(params: ISearchTaskParams): Promise<ITask[]> {
    const tasks = await this.taskRepository.find(params);
    return tasks;
  }
}
