export class RequiredException extends Error {
  readonly statusCode = 500;
  constructor(paramName?: string, requestParamName?: string) {
    super();
    this.name = RequiredException.name;
    this.message =
      paramName || requestParamName
        ? `${paramName} ${requestParamName}`
        : RequiredException.name;
  }
}
