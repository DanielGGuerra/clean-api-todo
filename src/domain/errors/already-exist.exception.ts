export class AlreadyExistException extends Error {
  constructor(column?: string) {
    super();
    this.name = AlreadyExistException.name;
    this.message = column ? `already exist ${column}` : 'AlreadyExistException';
  }
}
