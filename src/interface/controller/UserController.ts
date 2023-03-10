import { User } from "../../domain/User";
import { UserRepository } from "../../infrastructure/repository/impl/UserRepository";
import UserUseCase from "../../application/usecase/user";
import {
  FindUserRequest,
  TFindUserRequest,
} from "../request/user/FindUserRequest";
import { TResponse } from "../serializer/ApplicationSerializer";
import { UserResponse, UserSerializer } from "../serializer/UserSerializer";
import {
  CreateUserRequest,
  TCreateUserRequest,
} from "../request/user/CreateUserRequest";
import { UpdateUserRequest } from "../request/user/UpdateUserRequest";
import { TDeleteUserRequest } from "../request/user/DeleteUserRequest";

class UserController {
  private userSerializer: UserSerializer;
  private userRepository: UserRepository;

  public constructor() {
    this.userSerializer = new UserSerializer();
    this.userRepository = new UserRepository();
  }

  public async findUser(
    req: TFindUserRequest
  ): Promise<TResponse<UserResponse> | TResponse<{}>> {
    try {
      const request = new FindUserRequest(req.params);
      const useCase = new UserUseCase.FindUserUseCase(this.userRepository);
      let result = await useCase.getUser(request.id);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  public async findAllUser(): Promise<TResponse<UserResponse> | TResponse<{}>> {
    const useCase = new UserUseCase.FindUserUseCase(this.userRepository);
    let result = await useCase.getAllUsers();
    return this.userSerializer.users(result);
  }

  public async createUser(
    req: TCreateUserRequest
  ): Promise<TResponse<UserResponse> | TResponse<[]>> {
    try {
      const userParams = new CreateUserRequest(req.body);
      const useCase = new UserUseCase.CreateUserUseCase(this.userRepository);
      const user = new User(null, userParams.name);
      let result = await useCase.createUser(user);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  public async updateUser(
    req: UpdateUserRequest
  ): Promise<TResponse<UserResponse> | TResponse<[]>> {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const useCase = new UserUseCase.UpdateUserUseCase(this.userRepository);
      const user = new User(id, body.name);
      let result = await useCase.updateUser(user);
      return this.userSerializer.user(result);
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }

  public async deleteUser(
    req: TDeleteUserRequest
  ): Promise<TResponse<Record<string, null>> | TResponse<[]>> {
    try {
      const id = Number(req.params.id);
      const useCase = new UserUseCase.DeleteUserUseCase(this.userRepository);
      await useCase.deleteUser(id);
      return this.userSerializer.delete();
    } catch (error) {
      return this.userSerializer.error(error);
    }
  }
}

export { UserController };
