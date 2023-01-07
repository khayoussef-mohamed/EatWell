import {Body, Controller, Get, HttpStatus, Logger, Post, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {Food} from "./models";

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  async getFoods() {
    return {
      statusCode: HttpStatus.OK,
      data: this.appService.getListFood(),
    };
  }

  @Get('getFoods')
  async getFoodsByType(@Query('type') type: string){
    this.logger.log(type);
    return {
      statusCode: HttpStatus.OK,
      data: this.appService.getFoodByType(type),
    };
  }

    @Get('getCart')
    async getCart(){
      return {
        statusCode: HttpStatus.OK,
        data: this.appService.geListCart(),
      };
    }

    @Post('addFoodToCart')
    async addFoodToCart(@Body() food: Food){
        this.logger.log(food);
        return {
            statusCode: HttpStatus.OK,
            data: this.appService.addFoodToCart(food),
        };
    }
}
