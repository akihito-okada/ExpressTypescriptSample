import { User } from "../../../domain/User";
import { toUpdateUserDTO } from "../../../infrastructure/repository/user/DTO";
import { IUserRepository } from "../../../infrastructure/repository/user/IUserRepository";

class UpdateUserUseCase {
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public updateUser(user: User): Promise<User> {
    const userDTO = toUpdateUserDTO(user);
    return this.userRepository.update(userDTO);
  }
}

export { UpdateUserUseCase };
