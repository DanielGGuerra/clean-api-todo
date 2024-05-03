import { NotFoundException } from '../errors/not-found.exception';
import { ITaksRepository } from '../interfaces/repositories/task.repository';
import { IDeleteTaskUseCase } from '../interfaces/use-cases/delete-task.use-case';

export class DeleteTaskUseCase implements IDeleteTaskUseCase {
  constructor(private readonly taskRepository: ITaksRepository) {}

  async execute(id: number): Promise<void> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new NotFoundException('Task');
    }

    await this.taskRepository.delete(id);
  }
}
