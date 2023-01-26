import { Request } from "express";
export interface ParamsDictionary {
  [key: string]: string;
}
export type ParamsArray = string[];
export type Params = ParamsDictionary | ParamsArray;

interface TypedRequest<T extends ParamsDictionary> extends Request {
  params: T;
}

interface TypedRequestBody<T> extends Request {
  body: T;
}

export { TypedRequest, TypedRequestBody };
