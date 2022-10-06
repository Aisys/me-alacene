import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CupboardPage } from './cupboard.page';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { ViewIngredientComponent } from './view-ingredient/view-ingredient.component';

import { MainToolbarComponent } from '../../../public/main-toolbar/main-toolbar.component';
import { MainToolbarModule } from '../../../public/main-toolbar/main-toolbar.module';

import { CupboardPageRoutingModule } from './cupboard-routing.module';

import { CupboardsService } from 'src/app/services/cupboards.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CupboardPageRoutingModule,
    MainToolbarModule,
  ],
  declarations: [
    CupboardPage,
    AddIngredientComponent,
    ViewIngredientComponent,
  ],
  providers: [
    CupboardsService,
  ],
  entryComponents:[MainToolbarComponent]
})
export class CupboardPageModule {}
