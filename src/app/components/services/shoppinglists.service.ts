import {ListModel} from '../../Models/shoppinglists/list.model';
import {ListItemModel} from '../../Models/shoppinglists/list-item.model';
import {ListItemTypeModel} from '../../Models/shoppinglists/list-item-type.model';

export class ShoppinglistsService {

  private shoppingLists: ListModel[];
  private shoppingListItems: ListItemModel[];
  private shoppingListItemTypes: ListItemTypeModel[];

  constructor(){
    this.updateShoppingListsFromServer(1);
  }

  public updateShoppingListsFromServer(userID: number){
    // TODO: Make this actually fetch server content.
    this.shoppingLists = [
      new ListModel(1, 'Test List 1', 'Ryan', ['Ruth']),
      new ListModel(2, 'Test List 2', 'Ryan', ['Ruth']),
      new ListModel(3, 'Test List 3', 'Ryan', ['Ruth']),
    ];
    this.shoppingListItems = [
      new ListItemModel(1, 1, 1, 1, 1, new Date(), new Date()),
      new ListItemModel(2, 1, 3, 1, 1, new Date(), new Date()),
      new ListItemModel(3, 2, 1, 2, 1, new Date(), new Date()),
      new ListItemModel(4, 2, 2, 4, 1, new Date(), new Date()),
      new ListItemModel(5, 2, 4, 6, 1, new Date(), new Date()),
      new ListItemModel(6, 3, 5, 6, 1, new Date(), new Date()),
    ];
    this.shoppingListItemTypes = [
      new ListItemTypeModel(1, 'Bread', 'loaf', ''),
      new ListItemTypeModel(2, 'Milk', 'pint', ''),
      new ListItemTypeModel(3, 'Cheese', 'block', ''),
      new ListItemTypeModel(4, 'Egg', '', ''),
      new ListItemTypeModel(5, 'Toilet Roll', '', ''),
    ];
  }

  public getShoppingLists(): ListModel[] {
    return this.shoppingLists.slice(); // return a copy, not the actual array
  }

  public getShoppingList(id: number): ListModel {
    for (const list of this.shoppingLists){
      if (list.getId() === id) {
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

  public getShoppingListItems(listID: number): ListItemModel[] {
    const items: ListItemModel[] = [];
    for (const item of this.shoppingListItems){
      if (item.listID === listID) {
        items.push(item);
      }
    }
    return items;
  }

  public getItemType(typeID: number): ListItemTypeModel {
    for (const type of this.shoppingListItemTypes){
      if (type.id === typeID){
        return type;
      }
    }
    return null;
  }

}
