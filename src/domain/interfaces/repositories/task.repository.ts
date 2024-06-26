import { ITask } from '../../entities/task';

export interface ITaksRepository {
  add(data: ITask): Promise<ITask>;
  find(filter: Partial<ITask>): Promise<ITask[]>;
  findById(id: number): Promise<ITask | null>;
  findByTitle(title: string): Promise<ITask | null>;
  update(id: number, params: Partial<Omit<ITask, 'id'>>): Promise<void>;
  delete(id: number): Promise<void>;
}
