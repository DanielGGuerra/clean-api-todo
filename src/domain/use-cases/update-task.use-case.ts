import { NotFoundException } from '../errors/not-found.exception';
import { ITaksRepository } from '../interfaces/repositories/task.repository';
import {
  IUpdateTaskParams,
  IUpdateTaskUseCase,
} from '../interfaces/use-cases/update-task.use-case';

export class UpdateTaskUseCase implements IUpdateTaskUseCase {
  constructor(private readonly taskRepository: ITaksRepository) {}
  async execute(id: number, params: IUpdateTaskParams): Promise<void> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new NotFoundException('Task');
    }

    await this.taskRepository.update(id, params);
  }
}
