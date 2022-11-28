import { Component, Input, OnInit} from '@angular/core';
import { MenuItem } from 'src/app/models/menuItem';
import {SideMenuItem} from "../side-menu/side-menu-item/side-menu-item.model";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() activeItem! : SideMenuItem;
  menu : Array<MenuItem> = [];
  itemCount = 0;

  ngOnInit(): void {
  }


}
