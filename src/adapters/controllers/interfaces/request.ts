export interface IRequest {
  headers?: Record<string, string>[];
  params?: Record<string, string>;
  query?: any;
  body?: any;
}
