export class BadRequestException extends Error {
  readonly statusCode = 400;
  constructor(msg?: string) {
    super();
    this.name = BadRequestException.name;
    this.message = msg ? msg : BadRequestException.name;
  }
}
