import { Component } from '@angular/core';
import {delay} from "rxjs";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
   status = false;
ngOnInit() {
  this.changeStatus()
}

changeStatus(){
  this.delay(15000).then(() => this.status = true)
}
 delay(milliseconds : number) {
    return new Promise(resolve => setTimeout( resolve, milliseconds));
  }

}
