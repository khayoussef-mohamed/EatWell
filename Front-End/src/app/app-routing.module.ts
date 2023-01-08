import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import {MenuComponent} from "./pages/menu/menu.component";
import {BasketComponent} from "./pages/basket/basket.component";
import {ItemsComponent} from "./pages/items/items.component";
import {SummaryComponent} from "./pages/summary/summary.component";
import {SliderComponent} from "./pages/slider/slider.component";
import {PaymentComponent} from "./pages/payment/payment.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'slider', component: SliderComponent },
  {path: 'payment', component: PaymentComponent },
  // Pour afficher l'erreur 404
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
