export class NotFoundException extends Error {
  constructor(objName?: string) {
    super();
    this.name = NotFoundException.name;
    this.message = objName ? `Not found: ${objName}` : 'Not found';
  }
}
