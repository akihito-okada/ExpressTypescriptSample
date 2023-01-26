import { User } from "../../../domain/User";

interface TUpdateUserDTO {
  id: number;
  name: string;
}

interface TCreateUserDTO {
  name: string;
}

const toUpdateUserDTO = (user: User): TUpdateUserDTO => {
  return { id: user.id, name: user.name };
};

const toCreateUserDTO = (user: User): TCreateUserDTO => {
  return { name: user.name };
};

export { TUpdateUserDTO, TCreateUserDTO, toUpdateUserDTO, toCreateUserDTO };
