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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(fr);


@NgModule({
  declarations: [AppComponent, HeaderComponent, SideMenuComponent, SideMenuItemComponent, MenuComponent, MenuItemComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, BrowserAnimationsModule, FormsModule, HttpClientModule, IconsProviderModule, NzLayoutModule, NzMenuModule],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR }
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
