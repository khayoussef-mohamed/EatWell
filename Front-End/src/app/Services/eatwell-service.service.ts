import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodModel} from "../models/food.model";
import {BehaviorSubject, map, Observable, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EatwellServiceService {
  public sliderClick$: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public selectedFoodQuantity$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public basket$ : BehaviorSubject<FoodModel[]> = new BehaviorSubject<FoodModel[]>([]);

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    this.getCart().pipe(
      map((value: any) => value[0].foods),
      tap(VALUE => console.log(VALUE))
    )
      .subscribe(value => this.basket$.next(value))
  }

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
    console.log("foods : ",food);
    return this.http.post(this.url + 'addFoodToCart', food).pipe(
      map((value: any) => value.foods.map((food: FoodModel) => delete food.id)),
      tap((cart: any) => {
        console.log("cart : ", cart);
        //this.basket$.next(cart.foods)
      })
    );
  }
  deleteFoodFromCart(id: number) {
    return this.http.delete(this.url + 'deleteFoodFromCart?id=' + id).pipe();
  }


}
