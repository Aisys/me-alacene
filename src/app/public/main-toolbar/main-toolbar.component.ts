import { Component } from '@angular/core';
import { UserSettingsPage } from './user-settings/user-settings.page'

@Component({
  selector: 'app-main-toolbar',
  templateUrl: 'main-toolbar.component.html',
  styleUrls: ['main-toolbar.component.scss']
})
export class MainToolbarComponent {

  component = UserSettingsPage;

  constructor() {}

}
