import { ICreateTaskUseCase } from '../../domain/interfaces/use-cases/create-task.use-case';
import { IController } from './interfaces/controller';
import { IRequest } from './interfaces/request';
import { IResponse } from './interfaces/response';

export class CreateTaskController implements IController {
  constructor(private readonly createTaskUseCase: ICreateTaskUseCase) {}
  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      if (!body) throw new Error('body is mandatory');
      if (!body.title) throw new Error('title is mandatory');
      if (!body.description) throw new Error('title is mandatory');

      const task = await this.createTaskUseCase.execute({
        title: body.title,
        description: body.description,
      });

      return {
        statusCode: 201,
        data: task,
      };
    } catch (err) {
      return {
        statusCode: 500,
        data: (err as Error).message,
      };
    }
  }
}
