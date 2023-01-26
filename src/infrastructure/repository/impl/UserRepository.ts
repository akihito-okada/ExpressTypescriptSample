import { StatusCode } from "../../../constant/ErrorCode";
import { User } from "../../../domain/User";
import { TCreateUserDTO, TUpdateUserDTO } from "../user/DTO";
import { IUserRepository } from "../user/IUserRepository";

class UserRepository extends IUserRepository {
  private _nextId = 0;
  private getNextId(): number {
    this._nextId = this._nextId + 1;
    return this._nextId;
  }
  private _users: User[] = Array(new User(this.getNextId(), "デフォ"));

  private convertModel(r: User): User {
    let user = new User();
    user.id = r.id;
    user.name = r.name;
    return user;
  }

  public async find(id: number): Promise<User> {
    let user = this._users.find((d) => d.id === id);
    return this.convertModel(user);
  }

  public async findAll(): Promise<User[]> {
    return this._users.map((m): User => {
      return this.convertModel(m);
    });
  }

  public async update(userDTO: TUpdateUserDTO): Promise<User> {
    let user = this._users.find((d) => d.id == userDTO.id);
    user.name = userDTO.name;
    return this.convertModel(user);
  }

  public async create(userDTO: TCreateUserDTO): Promise<User> {
    let user = new User(this.getNextId(), userDTO.name);
    this._users.push(user);
    return this.convertModel(user);
  }

  public async delete(id: number): Promise<null> {
    let users = this._users.filter((d) => d.id === id);
    if (users.length == 0) {
      throw Error(
        JSON.stringify({
          code: StatusCode.invalid,
          message: "ユーザーは存在しません",
        })
      );
    }
    this._users = this._users.filter((d) => d.id !== id);
    return null;
  }
}

export { UserRepository };
