import {Recipe} from './recipe.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Recipe 1', 'Test Desc', 'http://www.solidbackgrounds.com/images/2560x1440/2560x1440-black-solid-color-background.jpg'),
        new Recipe('Recipe 2', 'Test Desc', 'http://www.solidbackgrounds.com/images/2560x1440/2560x1440-black-solid-color-background.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}