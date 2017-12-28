import {ListItemModel} from './list-item.model';

export class ListModel {
  private id: number;
  private name: string;
  private owner: string;
  private sharedWith: string[] = [];


  constructor(id: number, name: string, owner: string, sharedWith: string[]) {
    this.id = id;
    this.name = name;
    this.owner = owner;
    this.sharedWith = sharedWith;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getOwner(): string {
    return this.owner;
  }

  public getSharedWith(): string[] {
    return this.sharedWith.slice();
  }

}
