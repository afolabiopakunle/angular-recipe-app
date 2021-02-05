import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('Title item', 'Test Description just to fill up space and save face.', 'https://picsum.photos/200'),
    new RecipeModel("African fufu", "A description is always necessary to fill up space some more contents and words", "https://picsum.photos/200")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
