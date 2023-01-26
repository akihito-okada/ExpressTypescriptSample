import { TypedRequest } from "../ExpressRequest";
import { StatusCode } from "../../../constant/ErrorCode";

type Params = {
  id: string;
};

export type TFindUserRequest = TypedRequest<Params>;

export class FindUserRequest {
  private _id: number;

  public get id(): number {
    return this._id;
  }

  public constructor(params: Params) {
    const validId = this.validRequest(params);
    this._id = validId;
  }

  private validRequest(params: Params): number {
    console.log(params);
    const id = params.id;
    const numberId = Number(id);
    if (isNaN(numberId)) {
      throw new Error(
        JSON.stringify({
          code: StatusCode.invalid,
          message: "不正なrequest idです",
        })
      );
    }
    return numberId;
  }
}
