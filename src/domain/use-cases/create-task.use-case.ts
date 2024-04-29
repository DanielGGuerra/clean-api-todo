import { ITask } from '../entities/task';
import { AlreadyExistException } from '../errors/already-exist.exception';
import { ITaksRepository } from '../interfaces/repositories/task.repository';
import {
  ICreateTaskParams,
  ICreateTaskUseCase,
} from '../interfaces/use-cases/create-task.use-case';

export class CreateTaskUseCase implements ICreateTaskUseCase {
  constructor(private readonly taskRepository: ITaksRepository) {}
  async execute(params: ICreateTaskParams): Promise<ITask> {
    const isExistTitle = await this.taskRepository.findByTitle(params.title);

    if (isExistTitle) {
      throw new AlreadyExistException('title');
    }

    const task = await this.taskRepository.add({
      title: params.title,
      description: params.description,
      finished: false,
    });
    return task;
  }
}
