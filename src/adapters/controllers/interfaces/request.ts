export type IRequest = {
  headers?: Record<string, string>[];
  params?: Record<string, string>;
  query?: Record<string, string>;
  body?: any;
};
