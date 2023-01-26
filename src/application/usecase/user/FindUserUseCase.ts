import { User } from "../../../domain/User";
import { IUserRepository } from "../../../infrastructure/repository/user/IUserRepository";

class FindUserUseCase {
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public getUser(id: number): Promise<User> {
    return this.userRepository.find(id);
  }

  public getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}

export { FindUserUseCase };
