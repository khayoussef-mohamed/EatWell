import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {EatwellServiceService} from "../../Services/eatwell-service.service";
import {FoodModel} from "../../models/food.model";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  constructor(public service: EatwellServiceService) {
  }

  getItemQuantity(item: FoodModel){
    return this.service.basket$.value.filter(element => element.name === item.name).length
  }

  getSingleFoodBasket(){
    return [...new Set(this.service.basket$.value.filter((item, index) => this.service.basket$.value.findIndex(obj => obj.name === item.name) === index))] as FoodModel[]
  }

  totalAmount(){
    return this.service.basket$.value.reduce((acc, val) => acc + val.price, 0)
  }
}
