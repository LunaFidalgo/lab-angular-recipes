import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs";

@Injectable()
export class IngredientsService {
  BASE_URL: string = "http://localhost:3000/api/";
  constructor(private http: Http) {}

  getIngredients() {
    return this.http
      .get(`${this.BASE_URL}ingredients`)
      .map((res: Response) => res.json());
  }

  saveIngredient(id_ingredient, id_recipe, quantity) {
    return this.http
      .post(
        `${this.BASE_URL}dishes/${id_recipe}/ingredients/${id_ingredient}/add`,
        { quantity }
      )
      .map((res: Response) => {
        return res.json();
      });
  }
}

//'/dishes/:dishId/ingredients/:id/add'
