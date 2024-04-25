import { ITask } from '../../entities/task';

export type ITaksRepository = {
  add(data: ITask): Promise<ITask>;
  findById(id: number): Promise<ITask | null>;
  findByTitle(title: string): Promise<ITask | null>;
};
