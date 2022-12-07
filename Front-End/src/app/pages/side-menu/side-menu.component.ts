import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'src/app/models/menuItem';
import { SideMenuItem } from './side-menu-item/side-menu-item.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  @Output()
  newItemEvent = new EventEmitter<SideMenuItem>();

  sideMenuItems: SideMenuItem[] = [
    {
      name: 'Entrée',
      category: MenuItem.CategoryEnum.STARTER,
      image:
        'https://archzine.fr/wp-content/uploads/2016/05/rouleaux-de-cooncombre-avec-fromage-a%CC%80-la-cre%CC%80me-et-saumon-fume%CC%81-ide%CC%81e-de-recette-entre%CC%81e-froide-simple-et-rapide.jpg',
    },
    {
      name: 'Principal',
      category: MenuItem.CategoryEnum.MAIN,
      image:
        'https://www.fruitdor.fr/-/media/Project/Upfield/Brands/Becel-NL/Becel-FR/Assets/Recipes/New-recipe-images/Varumarkesida_831x554px_Plantbased-recipe-ideas_4.jpg?rev=41d1610c0bbf426e9de99559728f7da5&w=1920',
    },
    {
      name: 'Boissons',
      category: MenuItem.CategoryEnum.BEVERAGE,
      image:
        'https://www.lepiqueassiette-artenay.com/wp-content/uploads/2016/06/fruit-juice-1332072_1920-768x512-1.jpg',
    },
    {
      name: 'Dessert',
      category: MenuItem.CategoryEnum.DESSERT,
      image:
        'https://static.750g.com/images/622-auto/bb0da601a2fd36e1ad67794d9aaeaf5d/adobestock-239130233.jpeg',
    },
  ];

  activeItem: SideMenuItem = this.sideMenuItems[0];

  constructor() {}

  ngOnInit() {
    this.updateMenu(this.activeItem);
  }

  updateMenu(activeItem: SideMenuItem) {
    this.activeItem = activeItem;
    this.newItemEvent.emit(this.activeItem);
  }
}
