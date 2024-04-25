import { ITask } from '../../entities/task';

export type ICreateTaskParams = {
  title: string;
  description: string;
};

export type ICreateTaskUseCase = {
  execute(params: ICreateTaskParams): Promise<ITask>;
};
