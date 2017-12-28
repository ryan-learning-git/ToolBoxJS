import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppinglistsService} from '../../../services/shoppinglists.service';
import {ListModel} from '../../../../Models/shoppinglists/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  @ViewChild('listNameInput') nameInputRef: ElementRef;
  shoppingLists: ListModel[];

  constructor(private shoppingListService: ShoppinglistsService) { }

  ngOnInit() {
    this.shoppingLists = this.shoppingListService.getShoppingLists();
  }

  doAdd(){
    const name = this.nameInputRef.nativeElement.value;
    console.log('Add shopping list of name ', name);
  }

  public getItemCount(listID: number): number {
    return this.shoppingListService.getShoppingListItems(listID).length;
  }

}
