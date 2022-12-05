import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter();
  string = 'FR';

  constructor(private translate: TranslateService) {
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
}
