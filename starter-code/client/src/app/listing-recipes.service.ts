import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs";

@Injectable()
export class ListingRecipesService {
  BASE_URL: string = "http://localhost:3000/api/";
  constructor(private http: Http) {}

  getRecipes() {
    return this.http
      .get(`${this.BASE_URL}/dishes`)
      .map((res: Response) => res.json());
  }

  getRecipe(id) {
    return this.http
      .get(`${this.BASE_URL}/dishes/${id}`)
      .map((res: Response) => res.json());
  }

  addRecipe(name, description){
    let recipe = {name, description}

    return this.http
    .post(`${this.BASE_URL}/dishes`, recipe)
    .map((res: Response) => res.json());
  }
}
