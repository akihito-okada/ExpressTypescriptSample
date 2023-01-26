import { TypedRequestBody } from "../ExpressRequest";
import { StatusCode } from "../../../constant/ErrorCode";

interface Params {
  name: string;
}

export type TCreateUserRequest = TypedRequestBody<Params>;

export class CreateUserRequest {
  private _name: string;

  public get name(): string {
    return this._name;
  }

  public constructor(params: Params) {
    this.valid(params);
    this._name = params.name;
  }

  private valid(param: Params): void {
    if (param.name.length < 4) {
      throw new Error(
        JSON.stringify({
          code: StatusCode.invalid,
          message: "4文字以上の名前を入力してください",
        })
      );
    }
  }
}
