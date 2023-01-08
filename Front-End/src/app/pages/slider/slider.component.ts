import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {EatwellServiceService} from "../../Services/eatwell-service.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('boissons', { static: false}) boisson!: ElementRef;
  @ViewChild('plats', { static: false}) plat!: ElementRef;
  @ViewChild('desserts', { static: false}) dessert!: ElementRef;

  constructor(private service: EatwellServiceService) {
  }

  ngAfterViewInit(): void {
    fromEvent(this.boisson.nativeElement, 'click').subscribe((value) => {
      this.service.sliderClick$.next("boisson")
    })
    fromEvent(this.plat.nativeElement, 'click').subscribe((value) => {
      this.service.sliderClick$.next("plat")
    })
    fromEvent(this.dessert.nativeElement, 'click').subscribe((value) => {
      this.service.sliderClick$.next("dessert")
    })
  }
}
