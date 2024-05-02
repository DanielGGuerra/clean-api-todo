export interface IRequest {
  headers?: Record<string, string>[];
  params?: any;
  query?: any;
  body?: any;
}
