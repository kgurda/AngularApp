import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Test Name', 'Test Desc', 'http://www.solidbackgrounds.com/images/2560x1440/2560x1440-black-solid-color-background.jpg'),
      new Recipe('Test Name', 'Test Desc', 'http://www.solidbackgrounds.com/images/2560x1440/2560x1440-black-solid-color-background.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
