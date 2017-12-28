import { Component, OnInit } from '@angular/core';
import {ShoppinglistsService} from '../../../services/shoppinglists.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ListModel} from '../../../../Models/shoppinglists/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

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

}
