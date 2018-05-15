import { Component, OnInit } from "@angular/core";
import { ListingRecipesService } from "../listing-recipes.service";
import { IngredientsService } from "../ingredients.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
  providers: [ListingRecipesService, IngredientsService]
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private listingRecipesService: ListingRecipesService,
    private route: ActivatedRoute,
    private ingredientsService: IngredientsService
  ) {}

  ingredients: Array<object> = [];
  quantity: number = 0;
  recipe: object = {};
  ngOnInit() {
    let id = "";
    this.route.params.subscribe(params => (id = params.id));

    this.listingRecipesService.getRecipe(id).subscribe(recipe => {
      console.log("recipe------",recipe.ingredients)
      this.recipe = recipe;
      
    });

    this.ingredientsService.getIngredients().subscribe(ingredients => {
      //  console.log(ingredients);
      this.ingredients = ingredients;
    });
  }

  addRecipe(ingredient_id, recipe_id, quantity) {
    // console.log(
    //   "ingredient: ",
    //   ingredient_id,
    //   " recipe: ",
    //   recipe_id,
    //   "quantity: ",
    //   quantity
    // );

    //this.route.params.subscribe(params => console.log(params));

    this.ingredientsService
      .saveIngredient(ingredient_id, recipe_id, quantity)
      .subscribe(dish => {
        this.recipe = dish;
        console.log("DISH", dish);
      });
  }
}
