export class ListModel {
  public id: number;
  public name: string;
  public owner: string;
  public sharedWith: string[];


  constructor(id: number, name: string, owner: string, sharedWith: string[]) {
    this.id = id;
    this.name = name;
    this.owner = owner;
    this.sharedWith = sharedWith;
  }

}
