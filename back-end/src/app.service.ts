import { Injectable } from '@nestjs/common';
import {DatabaseConfig} from "./database/database.config";
import {Food, Cart, Order} from "./models";
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class AppService {
  foods = DatabaseConfig.getFoodSeeder();
  carts = DatabaseConfig.getCartSeeder();
  orders = DatabaseConfig.getOrderSeeder();

  getFoodByType(type: string): Food[] {
    return this.foods.filter(food => food.type === type);
  }
  geListCart(): Cart[] {
    return this.carts;
  }

  getListOrder(): Order[] {
    return this.orders;
  }

  getListFood(): Food[] {
    return this.foods;
  }

  async addFoodToCart(food: Food): Promise<Cart> {
    const cart = [DatabaseConfig.addFoodInCart(food)];
    await writeFile('./src/mocks/cart.json', JSON.stringify(cart));
    return this.carts[0];
  }

 async deleteFoodFromCart(id) {
    const index = this.carts[0].foods.findIndex(food => food.id === id);
    this.carts[0].foods.splice(index, 1);
    await writeFile('./src/mocks/cart.json', JSON.stringify(this.carts));
    return this.carts[0];
  }
}
