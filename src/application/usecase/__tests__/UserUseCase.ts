import { User } from "../../../domain/User";
import { UserRepository } from "../../../infrastructure/repository/impl/UserRepository";
import UserUseCase from "../user";
jest.mock("../../../infrastructure/repository/impl/UserRepository");

const repository = new UserRepository();

describe("usecase", (): void => {
  describe("UserUseCase", (): void => {
    describe("FindUserUseCase", (): void => {
      const usecase = new UserUseCase.FindUserUseCase(repository);
      it("constructorが動作する", (): void => {
        expect(usecase).toBeTruthy();
      });
      it("postRepository.findが呼ばれる", async () => {
        await usecase.getUser(1);
        expect(repository.find).toHaveBeenCalled();
      });
      it("postRepository.findAllが呼ばれる", async () => {
        const users = await usecase.getAllUsers();
        expect(repository.findAll).toHaveBeenCalled();
      });
    });
    describe("DeleteUserUseCase", (): void => {
      const usecase = new UserUseCase.DeleteUserUseCase(repository);
      it("constructorが動作する", (): void => {
        expect(usecase).toBeTruthy();
      });
      it("postRepository.deleteが呼ばれる", async () => {
        await usecase.deleteUser(1);
        expect(repository.delete).toHaveBeenCalled();
      });
    });
    describe("UpdateUserUseCase", (): void => {
      const usecase = new UserUseCase.UpdateUserUseCase(repository);
      it("constructorが動作する", (): void => {
        expect(usecase).toBeTruthy();
      });
      it("postRepository.updateが呼ばれる", async () => {
        await usecase.updateUser(new User(0, "hoge"));
        expect(repository.update).toHaveBeenCalled();
      });
    });
    describe("CreateUserUseCase", (): void => {
      const usecase = new UserUseCase.CreateUserUseCase(repository);
      it("constructorが動作する", (): void => {
        expect(usecase).toBeTruthy();
      });
      it("postRepository.updateが呼ばれる", async () => {
        await usecase.createUser(new User(0, "hoge"));
        expect(repository.create).toHaveBeenCalled();
      });
    });
  });
});
