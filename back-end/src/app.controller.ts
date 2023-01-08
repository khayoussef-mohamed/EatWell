import {Body, Controller, Delete, Get, HttpStatus, Logger, Post, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {Food} from "./models";

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  async getFoods() {
    return this.appService.getListFood()
  }

  @Get('getFoods')
  async getFoodsByType(@Query('type') type: string){
    this.logger.log(type);
    return this.appService.getFoodByType(type)
  }

    @Get('getCart')
    async getCart(){
      return this.appService.geListCart()
    }

    @Post('addFoodToCart')
    async addFoodToCart(@Body() food: Food){
        this.logger.log(food);
        return this.appService.addFoodToCart(food)
    }

    @Delete('deleteFoodFromCart')
    async deleteFoodFromCart(@Query('id') id: number){
        this.logger.log(id);
        return this.appService.deleteFoodFromCart(id)
    }
}
