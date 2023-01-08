import { Component , OnInit} from '@angular/core';
import {EatwellServiceService} from "../Services/eatwell-service.service";
import {FoodModel} from "../models/food.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'Card View Demo';
  foods: FoodModel[] = [];
  gridColumns = 3;
  typeFilter!: string

  constructor(private service: EatwellServiceService, private router: Router) {
  }


  ngOnInit(): void {
        this.service.getFoods().subscribe((foods) => {
          console.log(foods);
          this.foods = foods;
        });

        this.service.sliderClick$.subscribe((foodtype) => {
          this.typeFilter = foodtype;
        })
    }

    createArray(num: number | undefined){
      return num === undefined ? [] : Array(num);
    }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  ChoisirPlat(food: FoodModel) {
    //this.service.getFoods() ;
    this.router.navigate(['/menu'], {state: food});
  }


}
