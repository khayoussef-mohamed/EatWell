import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Observable} from "rxjs";
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter();
  string = 'FR';
  readonly darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private translate: TranslateService, private darkModeService: DarkModeService) {
    this.translate.setDefaultLang('fr');
  }
  french() {
    this.translate.use('fr');

    this.string = 'FR';
  }

  english() {
    this.translate.use('en');

    this.string = 'EN';
  }

  logout() {
    console.log('logout');
  }
  onToggle(): void {
    this.darkModeService.toggle();
  }
}
