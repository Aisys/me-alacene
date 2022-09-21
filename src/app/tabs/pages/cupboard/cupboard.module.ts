import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CupboardPage } from './cupboard.page';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';

import { CupboardPageRoutingModule } from './cupboard-routing.module';
// import { MainToolbarComponent } from '../main-toolbar-component/main-toolbar-component';
import { MainToolbarComponentModule } from '../../../public/main-toolbar-component/main-toolbar-component.module';
import { MainToolbarComponent } from '../../../public/main-toolbar-component/main-toolbar-component';
import { IngredientsService } from 'src/app/services/ingredients.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CupboardPageRoutingModule,
    MainToolbarComponentModule
  ],
  declarations: [
    CupboardPage,
    AddIngredientComponent,
  ],
  providers: [
    IngredientsService,
  ],
  entryComponents:[MainToolbarComponent]
})
export class CupboardPageModule {}
