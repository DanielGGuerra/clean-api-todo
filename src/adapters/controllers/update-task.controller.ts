import { IUpdateTaskUseCase } from '../../domain/interfaces/use-cases/update-task.use-case';
import { RequiredException } from './errors/required.exception';
import { created } from './helpers/created.helpers';
import { handleErrorHelper } from './helpers/handle-error.helper';
import { IController } from './interfaces/controller';
import { IRequest } from './interfaces/request';
import { IResponse } from './interfaces/response';

export class UpdateTaskController implements IController {
  constructor(private readonly updateTaskUseCase: IUpdateTaskUseCase) {}
  async handle({ body, params }: IRequest): Promise<IResponse> {
    try {
      if (!params || !params.id) {
        throw new RequiredException('id parameter is required');
      }

      if (!body) {
        throw new RequiredException('body is required');
      }

      await this.updateTaskUseCase.execute(parseInt(params.id), body);

      return created(null);
    } catch (err) {
      return handleErrorHelper(err as Error);
    }
  }
}
