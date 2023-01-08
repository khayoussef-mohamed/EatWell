import {Pipe, PipeTransform} from "@angular/core";
import {FoodModel} from "../models/food.model";

@Pipe({name: 'foodFilter'})
export class FoodPipeFilter implements PipeTransform {
  transform(foods: FoodModel[], type: string) {
    return foods.filter(food => type.length === 0 ? food : food.type === type);
  }
}
