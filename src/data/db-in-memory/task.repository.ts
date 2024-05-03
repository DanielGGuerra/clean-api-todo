import { ITask } from '../../domain/entities/task';
import { ITaksRepository } from '../../domain/interfaces/repositories/task.repository';

export class TaskRepository implements ITaksRepository {
  private taskList: ITask[] = [];
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

  find(filter: Partial<ITask>): Promise<ITask[]> {
    const columnsFilter = Object.keys(filter);

    if (!columnsFilter.length) return Promise.resolve(this.taskList);

    const tasks = [];

    for (const task of this.taskList) {
      let insert = true;
      for (const column of columnsFilter) {
        if (
          filter[column as keyof ITask] &&
          task[column as keyof ITask] !== filter[column as keyof ITask]
        ) {
          insert = false;
        }
      }
      if (insert) tasks.push(task);
    }

    return Promise.resolve(tasks);
  }

  update(id: number, params: Partial<Omit<ITask, 'id'>>): Promise<void> {
    const index = this.taskList.findIndex(task => task.id === id);

    if (index >= 0) {
      this.taskList[index] = Object.assign({}, this.taskList[index], params);
    }

    return Promise.resolve();
  }

  delete(id: number): Promise<void> {
    const tasks = this.taskList.filter(task => task.id !== id);
    this.taskList = tasks;
    return Promise.resolve();
  }
}
