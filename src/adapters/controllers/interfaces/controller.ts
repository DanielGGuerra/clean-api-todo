import { IRequest } from './request';
import { IResponse } from './response';

export type IController = {
  handle(request: IRequest): Promise<IResponse>;
};
