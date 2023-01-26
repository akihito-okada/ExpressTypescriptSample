import moment from "moment";
import { User } from "../../domain/User";
import {
  ApplicationSerializer,
  StatusCode,
  TResponse,
} from "./ApplicationSerializer";

export interface UserResponse {
  id: number;
  name: string;
}

export class UserSerializer extends ApplicationSerializer {
  public user(data: User): TResponse<UserResponse> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsedAt: moment().format(),
      };
    }
    return {
      code: StatusCode.success,
      data: {
        id: data.id,
        name: data.name,
      },
      responsedAt: moment().format(),
    };
  }

  public users(data: User[]): TResponse<UserResponse[]> {
    if (!data) {
      return {
        code: StatusCode.exception,
        message: "data is null",
        responsedAt: moment().format(),
      };
    }
    return {
      code: StatusCode.success,
      data: data.map((d): UserResponse => {
        return {
          id: d.id,
          name: d.name,
        };
      }),
      responsedAt: moment().format(),
    };
  }

  public delete(): TResponse<Record<string, null>> {
    return {
      code: StatusCode.success,
      data: {},
      responsedAt: moment().format(),
    };
  }
}
