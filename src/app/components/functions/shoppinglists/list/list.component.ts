import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppinglistsService} from '../../../services/shoppinglists.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ListModel} from '../../../../Models/shoppinglists/list.model';
import {ListItemModel} from '../../../../Models/shoppinglists/list-item.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild('typeNameInput') typeNameInputRef: ElementRef;

  id: number;
  list: ListModel;

  constructor(private shoppingListsService: ShoppinglistsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.list = this.shoppingListsService.getShoppingList(this.id);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.list = this.shoppingListsService.getShoppingList(this.id);
      }
    );
  }

  public getListItemsNotBought(): ListItemModel[] {
    const items: ListItemModel[] = [];
    const fullList = this.getFullItemList();
    for (const item of fullList){
      if (item.completedBy === undefined || item.completedBy === null){
        items.push(item);
      }
    }
    return items;
  }

  public getListItemsBought(): ListItemModel[] {
    const items: ListItemModel[] = [];
    const fullList = this.getFullItemList();
    for (const item of fullList){
      if (item.completedBy !== undefined && item.completedBy !== null){
        items.push(item);
      }
    }
    return items;
  }

  public getListItemType(type: number){
    return this.shoppingListsService.getItemType(type);
  }

  private getFullItemList(): ListItemModel[] {
    return this.shoppingListsService.getShoppingListItems(this.id);
  }

  public doAddItem(){
    console.log('Type name is ', this.typeNameInputRef.nativeElement.value);
  }

  public delete(id: number): void {
    console.log('Delete ', id);
  }

}
