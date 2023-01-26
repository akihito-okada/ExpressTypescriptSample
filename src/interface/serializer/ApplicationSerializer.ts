import moment from "moment";
import { StatusCode, TException } from "../../constant/ErrorCode";

class ApplicationSerializer {
  public error(error: Error): TResponse<[]> {
    try {
      const err: TException = JSON.parse(error.message);
      return {
        code: err.code,
        errorName: error.name,
        message: err.message,
        responsedAt: moment().format(),
      };
    } catch {}
  }
}

type TResponse<T> =
  | {
      code: typeof StatusCode.success;
      data: T;
      responsedAt: string;
    }
  | {
      code:
        | typeof StatusCode.invalid
        | typeof StatusCode.exception
        | typeof StatusCode.undefined;
      errorName?: string;
      message: string;
      responsedAt: string;
    };

export { ApplicationSerializer, TResponse, StatusCode };
