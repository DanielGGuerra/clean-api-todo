export class NotFoundException extends Error {
  readonly statusCode = 404;
  constructor(msg?: string) {
    super();
    this.name = NotFoundException.name;
    this.message = msg ? msg : NotFoundException.name;
  }
}
