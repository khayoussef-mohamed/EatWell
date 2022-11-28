import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';
import { SideMenuItemComponent } from './pages/side-menu/side-menu-item/side-menu-item.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuItemComponent } from './pages/menu/menu-item/menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, HeaderComponent, SideMenuComponent, SideMenuItemComponent, MenuComponent, MenuItemComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
