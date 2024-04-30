import { IRequest } from './request';
import { IResponse } from './response';

export interface IController {
  handle(request?: IRequest): Promise<IResponse>;
}
