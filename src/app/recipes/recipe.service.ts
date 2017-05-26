import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Recipe 1',
            'Test Desc',
            'http://www.solidbackgrounds.com/images/2560x1440/2560x1440-black-solid-color-background.jpg',
            [
                new Ingredient('a', 1),
                new Ingredient('b', 3)
            ]),
        new Recipe('Recipe 2',
            'Test Desc',
            'http://www.solidbackgrounds.com/images/2560x1440/2560x1440-black-solid-color-background.jpg',
            [
                new Ingredient('c', 2),
                new Ingredient('d', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}