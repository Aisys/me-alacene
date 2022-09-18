import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainToolbarComponent } from './main-toolbar-component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [MainToolbarComponent],
  exports: [MainToolbarComponent],
})
export class MainToolbarComponentModule {}
