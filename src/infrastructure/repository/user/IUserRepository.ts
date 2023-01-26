import { User } from "../../../domain/User";
import { TCreateUserDTO, TUpdateUserDTO } from "./DTO";

abstract class IUserRepository {
  abstract findAll(): Promise<User[]>;
  abstract find(id: number): Promise<User>;
  abstract create(user: TCreateUserDTO): Promise<User>;
  abstract update(user: TUpdateUserDTO): Promise<User>;
  abstract delete(id: number): Promise<null>;
}

export { IUserRepository };
