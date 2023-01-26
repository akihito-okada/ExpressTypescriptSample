/**
 * memo: 最重要ビジネスルールと最重要ビジネスデータは同じファイルに閉じ込めるべし
 */
class User {
  private _id: number;
  private _name: string;

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public constructor(id: number = null, name: string = null) {
    this._id = id;
    this._name = name;
  }
}

const UserBusinessRule = {
  /**
   * 名前は1文字以上、12文字未満
   * @param name String
   */
  isNameLengthValid(name: string): boolean {
    return name.length > 0 && name.length < 12;
  },
};

export { User, UserBusinessRule };
