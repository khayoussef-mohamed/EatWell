import { Component } from '@angular/core';
import {delay} from "rxjs";
import {EatwellServiceService} from "../../Services/eatwell-service.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
   status = false;
  constructor(public service: EatwellServiceService) {
  }
ngOnInit() {
  this.changeStatus()
}

changeStatus(){
  this.delay(15000).then(() => this.status = true)
}
 delay(milliseconds : number) {
    return new Promise(resolve => setTimeout( resolve, milliseconds));
  }

  totalAmount(){
    return this.service.basket$.value.reduce((acc, val) => acc + val.price, 0)
  }

}
