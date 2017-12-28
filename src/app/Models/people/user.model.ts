export class UserModel {

  private id: number;
  private displayName: string;
  private email: string;

  constructor(id: number, displayName: string, email: string) {
    this.id = id;
    this.displayName = displayName;
    this.email = email;
  }

  public getId(): number {
    return this.id;
  }

  public getDisplayName(): string {
    return this.displayName;
  }

  public getEmail(): string {
    return this.email;
  }


}
