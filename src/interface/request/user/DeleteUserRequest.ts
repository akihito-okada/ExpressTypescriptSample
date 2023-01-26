import { ParamsDictionary, TypedRequest } from "../ExpressRequest";

interface Params extends ParamsDictionary {
  id: string;
}

export type TDeleteUserRequest = TypedRequest<Params>;
