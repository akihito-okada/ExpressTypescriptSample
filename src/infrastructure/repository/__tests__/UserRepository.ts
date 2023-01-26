import { User } from "../../../domain/User";
import { UserRepository } from "../impl/UserRepository";

describe("repository", (): void => {
  describe("PostRepositoryImpl", (): void => {
    const userRepository = new UserRepository();
    it("値を1つ取り出す", async (): Promise<void> => {
      const row = await userRepository.find(1);
      const user = new User(1, "デフォ");
      expect(row).toEqual(user);
    });
    it("値をすべて取り出す", async (): Promise<void> => {
      const row = await userRepository.findAll();
      expect(row.length).toEqual(1);
    });
    it("値を追加", async (): Promise<void> => {
      const user = new User(null, "二人目");
      await userRepository.create(user);
      const row = await userRepository.findAll();
      expect(row.length).toEqual(2);
    });
    it("値を更新", async (): Promise<void> => {
      const user = new User(1, "更新");
      const row = await userRepository.update(user);
      expect(row.name).toEqual(user.name);
    });
    it("値を削除", async (): Promise<void> => {
      await userRepository.delete(1);
      const row = await userRepository.findAll();
      expect(row.length).toEqual(1);
    });
  });
});
