import { Component, OnInit } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientsModel[] = [
    new IngredientsModel('Pepper', 3),
    new IngredientsModel('Flour', 2),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
