import { ITask } from '../../domain/entities/task';
import { ITaksRepository } from '../../domain/interfaces/repositories/task.repository';

export class TaskRepository implements ITaksRepository {
  private readonly taskList: ITask[] = [];
  private lastId = 0;

  add(data: ITask): Promise<ITask> {
    this.lastId += 1;
    const newId = this.lastId;

    const task = {
      id: newId,
      title: data.title,
      description: data.description,
      finished: data.finished,
    };

    this.taskList.push(task);

    return Promise.resolve(task);
  }

  findById(id: number): Promise<ITask | null> {
    const task = this.taskList.find(task => task.id === id);

    if (!task) {
      return Promise.resolve(null);
    }

    return Promise.resolve(task);
  }

  findByTitle(title: string): Promise<ITask | null> {
    const task = this.taskList.find(task => task.title === title);

    if (!task) {
      return Promise.resolve(null);
    }

    return Promise.resolve(task);
  }
}
