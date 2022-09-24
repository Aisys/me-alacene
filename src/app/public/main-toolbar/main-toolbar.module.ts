import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainToolbarComponent } from './main-toolbar.component';
import { UserSettingsPage } from "./user-settings/user-settings.page";
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([])
  ],
  declarations: [MainToolbarComponent, UserSettingsPage],
  exports: [MainToolbarComponent],
  entryComponents:[]
})
export class MainToolbarModule {}
