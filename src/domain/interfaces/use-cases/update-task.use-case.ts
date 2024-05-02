import { ITask } from '../../entities/task';

export interface IUpdateTaskParams extends Partial<Omit<ITask, 'id'>> {}

export interface IUpdateTaskUseCase {
  execute(id: number, params: IUpdateTaskParams): Promise<void>;
}
