import { IResponse } from '../interfaces/response';

export function created(data?: any): IResponse {
  return {
    statusCode: 201,
    data: data,
  };
}
