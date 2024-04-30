import { ITask } from '../../entities/task';

export interface ITaksRepository {
  add(data: ITask): Promise<ITask>;
  find(filter: Partial<ITask>): Promise<ITask[]>;
  findById(id: number): Promise<ITask | null>;
  findByTitle(title: string): Promise<ITask | null>;
}
