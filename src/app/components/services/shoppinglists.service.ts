import {ListModel} from '../../Models/list.model';

export class ShoppinglistsService {

  private shoppingLists: ListModel[] = [];

  public getShoppingLists(): ListModel[] {
    return this.shoppingLists.slice(); // return a copy, not the actual array
  }

  public getShoppingList(name: string): ListModel {
    for (const list of this.shoppingLists){
      if (list.name === name){
        return list;
      }
    }
    return null;
  }

  public updateShoppingList(name: string, list: ListModel) {
    console.log('name is ', name, 'and list is ', list, ' and we need to update the lists.');
    // TODO: push changes to list
    // TODO: push changes to server
  }


}
