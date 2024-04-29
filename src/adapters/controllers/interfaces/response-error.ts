export interface IResponseError extends Error {
  readonly statusCode: number;
}
