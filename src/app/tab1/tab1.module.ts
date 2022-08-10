import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
// import { MainToolbarComponent } from '../main-toolbar-component/main-toolbar-component';
import { MainToolbarComponentModule } from '../main-toolbar-component/main-toolbar-component.module';
import { MainToolbarComponent } from '../main-toolbar-component/main-toolbar-component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    MainToolbarComponentModule
  ],
  declarations: [Tab1Page,],
  entryComponents:[MainToolbarComponent]
})
export class Tab1PageModule {}
