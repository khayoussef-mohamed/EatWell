import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodModel} from "../models/food.model";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EatwellServiceService {
  public sliderClick$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public selectedFoodQuantity$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getFoods(): Observable<FoodModel[]> {
    return this.http.get<FoodModel[]>(this.url).pipe();
  }

  getFoodsByType(type: string): Observable<FoodModel[]>  {
    return this.http.get<FoodModel[]>(this.url + 'getFoods?type=' + type).pipe();
  }

  getCart() {
    return this.http.get(this.url + 'getCart').pipe();
  }
  addFoodToCart(food: FoodModel) {
    return this.http.post(this.url + 'addFoodToCart', food).pipe();
  }
  deleteFoodFromCart(id: number) {
    return this.http.delete(this.url + 'deleteFoodFromCart?id=' + id).pipe();
  }

}
