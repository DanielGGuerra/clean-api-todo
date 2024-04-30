import { IResponse } from '../interfaces/response';

export function ok(data: any): IResponse {
  return {
    statusCode: 200,
    data: data,
  };
}
