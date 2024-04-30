import { ITask } from '../../entities/task';

export interface ISearchTaskParams extends Partial<ITask> {}

export interface ISearchTaskUseCase {
  execute(params: ISearchTaskParams): Promise<ITask[]>;
}
