import { Component, OnInit } from '@angular/core';
import {ShoppinglistsService} from '../../../services/shoppinglists.service';
import {ListModel} from '../../../../Models/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  private shoppingLists: ListModel[];

  constructor(private shoppingListService: ShoppinglistsService) { }

  ngOnInit() {
    this.shoppingLists = this.shoppingListService.getShoppingLists();
  }

}
