import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
      new Recipe('Recipe 1', 'Test Desc', 'http://www.solidbackgrounds.com/images/2560x1440/2560x1440-black-solid-color-background.jpg'),
      new Recipe('Recipe 2', 'Test Desc', 'http://www.solidbackgrounds.com/images/2560x1440/2560x1440-black-solid-color-background.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
