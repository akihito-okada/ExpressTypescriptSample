import { UserBusinessRule } from "../User";

describe("domain", (): void => {
  describe("user", (): void => {
    it("ユーザー名が1-11字以内を許容", (): void => {
      const name = "ほげほげ";
      const expected = true;
      expect(UserBusinessRule.isNameLengthValid(name)).toBe(expected);
    });
    it("ユーザー名が空を弾く", (): void => {
      const name = "";
      const expected = false;
      expect(UserBusinessRule.isNameLengthValid(name)).toBe(expected);
    });
    it("ユーザー名が11文字であることを許容", (): void => {
      const name = "12345678901";
      const expected = true;
      expect(UserBusinessRule.isNameLengthValid(name)).toBe(expected);
    });
    it("ユーザー名が12文字であることを弾く", (): void => {
      const name = "123456789012";
      const expected = false;
      expect(UserBusinessRule.isNameLengthValid(name)).toBe(expected);
    });
  });
});
