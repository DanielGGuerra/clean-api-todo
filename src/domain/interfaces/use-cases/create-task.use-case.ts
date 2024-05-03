import { ITask } from '../../entities/task';

export interface ICreateTaskParams {
  title: string;
  description: string;
}

export interface ICreateTaskUseCase {
  execute(params: ICreateTaskParams): Promise<ITask>;
}
