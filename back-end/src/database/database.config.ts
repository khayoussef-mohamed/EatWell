import { foodMocks, cartMocks, orderMocks } from '../mocks'
import {Food, Cart, Order} from "../models";

export class DatabaseConfig {
    private static foodSeeder() {
        const seeds: Food[] = []
        for (const mockFood of foodMocks) {
            const food = new Food();
            food.id = mockFood.id === undefined ? Math.floor(Math.random() * (100000) + 1) : mockFood.id;
            food.name = mockFood.name;
            food.type = mockFood.type;
            food.img = mockFood.img;
            food.notation = mockFood.notation;
            food.price = mockFood.price;
            seeds.push(food);
        }
        return seeds;
    }

    private static cartSeeder() {
        const seeds: Cart[] = []
        for (const mockCart of cartMocks) {
            const cart = new Cart();
            cart.id = mockCart.id === undefined ? Math.floor(Math.random() * (100000) + 1) : mockCart.id;
            cart.foods = mockCart.foods
            seeds.push(cart);
        }
        return seeds;
    }

    private static orderSeeder() {
        const seeds: Order[] = []
        for (const mockOrder of orderMocks) {
            const order = new Order();
            order.id = mockOrder.id === undefined ? Math.floor(Math.random() * (100000) + 1) : mockOrder.id;
            order.cart = mockOrder.cart;
            order.status = "PENDING"
            seeds.push(order);
        }
        return seeds;
    }

    static getFoodSeeder(): Food[]{
        return DatabaseConfig.foodSeeder();
    }

    static getCartSeeder(): Cart[]{
        return DatabaseConfig.cartSeeder();
    }

    static getOrderSeeder(): Order[]{
        return DatabaseConfig.orderSeeder();
    }

    static addFoodInCart(food: Food): Cart{
        food.id =  food.id === undefined ? cartMocks[0].foods.length + 1 : food.id;
        cartMocks[0].foods.push(food);
        return cartMocks[0]
    }
}