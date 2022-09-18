import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CupboardPage } from './cupboard.page';
import { ExploreContainerComponentModule } from '../../../public/explore-container/explore-container.module';

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
    ExploreContainerComponentModule,
    CupboardPageRoutingModule,
    MainToolbarComponentModule
  ],
  declarations: [CupboardPage],
  providers: [
    IngredientsService,
  ],
  entryComponents:[MainToolbarComponent]
})
export class CupboardPageModule {}
