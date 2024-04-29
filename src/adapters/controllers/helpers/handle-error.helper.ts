import { AlreadyExistException } from '../../../domain/errors/already-exist.exception';
import { BadRequestException } from '../errors/bad-request.exception';
import { InternalErrorException } from '../errors/internal-error.exception';
import { IResponse } from '../interfaces/response';

export function handleErrorHelper(error: Error): IResponse {
  if (error instanceof AlreadyExistException) {
    const badRequestException = new BadRequestException(error.message);
    return {
      statusCode: badRequestException.statusCode,
      data: badRequestException.message,
    };
  }
  const internalErrorException = new InternalErrorException();
  return {
    statusCode: internalErrorException.statusCode,
    data: internalErrorException.name,
  };
}
