export class InternalErrorException extends Error {
  readonly statusCode = 500;
  constructor(msg?: string) {
    super();
    this.name = InternalErrorException.name;
    this.message = msg ? msg : InternalErrorException.name;
  }
}
