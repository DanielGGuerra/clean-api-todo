import { IDeleteTaskUseCase } from '../../domain/interfaces/use-cases/delete-task.use-case';
import { RequiredException } from './errors/required.exception';
import { created } from './helpers/created.helpers';
import { handleErrorHelper } from './helpers/handle-error.helper';
import { IController } from './interfaces/controller';
import { IRequest } from './interfaces/request';
import { IResponse } from './interfaces/response';

export class DeleteTaskController implements IController {
  constructor(private readonly deleteTaskUseCase: IDeleteTaskUseCase) {}

  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      if (!params || !params.id) {
        throw new RequiredException('id parameter is required');
      }

      await this.deleteTaskUseCase.execute(parseInt(params.id));

      return created(null);
    } catch (err) {
      return handleErrorHelper(err as Error);
    }
  }
}
