import { Component, OnInit } from "@angular/core";
import { ListingRecipesService } from "../listing-recipes.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
  providers: [ListingRecipesService]
})
export class RecipeListComponent implements OnInit {
  recipes: Array<object> = [];
  name: string = "";
  description: string = "";
  constructor(private listingRecipesService: ListingRecipesService) {}

  ngOnInit() {
    this.listingRecipesService
      .getRecipes()
      .subscribe(recipes => (this.recipes = recipes));
  }

  addDish() {
    this.listingRecipesService
      .addRecipe(this.name, this.description)
      .subscribe(dish => this.recipes.push(dish));
  }
}
