import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { SideMenuItem } from './side-menu-item.model';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.css']
})
export class SideMenuItemComponent implements OnInit {

  @Input()
  sideMenuItem!: SideMenuItem;

  @Output()
  newItemEvent = new EventEmitter<SideMenuItem>();

  constructor() { }

  ngOnInit() {}

  selectItem() {
    this.newItemEvent.emit(this.sideMenuItem);
  }
}
