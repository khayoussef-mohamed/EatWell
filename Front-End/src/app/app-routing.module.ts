import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import {MenuComponent} from "./pages/menu/menu.component";
import {BasketComponent} from "./pages/basket/basket.component";
import {ItemsComponent} from "./pages/items/items.component";
import {SummaryComponent} from "./pages/summary/summary.component";

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
