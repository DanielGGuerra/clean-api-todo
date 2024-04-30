import {
  ISearchTaskParams,
  ISearchTaskUseCase,
} from '../../domain/interfaces/use-cases/search-task.use-case';
import { handleErrorHelper } from './helpers/handle-error.helper';
import { ok } from './helpers/ok.helpers';
import { IController } from './interfaces/controller';
import { IRequest } from './interfaces/request';
import { IResponse } from './interfaces/response';

export class SearchTaskController implements IController {
  constructor(private readonly searchTaskUseCase: ISearchTaskUseCase) {}
  async handle({ query }: IRequest): Promise<IResponse> {
    try {
      const params: ISearchTaskParams = {
        id: query?.id ? parseInt(query.id) : undefined,
        title: query?.title,
        description: query?.description,
        finished: query?.finished ? query?.finished === 'true' : undefined,
      };

      const tasks = await this.searchTaskUseCase.execute(params);

      return ok(tasks);
    } catch (err) {
      console.error(err);
      return handleErrorHelper(err as Error);
    }
  }
}
