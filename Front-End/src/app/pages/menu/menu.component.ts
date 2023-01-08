import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FoodModel} from "../../models/food.model";
import {EatwellServiceService} from "../../Services/eatwell-service.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  itemCount = 0;
  selectedFood: FoodModel;

  constructor(private router: Router, public service: EatwellServiceService) {
    this.selectedFood = this.router?.getCurrentNavigation()?.extras.state as FoodModel
  }

  ngOnInit(): void {
    console.log(this.selectedFood)
  }


}
