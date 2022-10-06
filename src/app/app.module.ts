import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngredientsService } from './services/ingredients.service';
import { CupboardsService } from './services/cupboards.service';

// import { MainToolbarComponentModule } from './main-toolbar-component/main-toolbar-component.module';
// import { MainToolbarComponent } from './main-toolbar-component/main-toolbar-component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ], // MainToolbarComponentModule  
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IngredientsService,
    CupboardsService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ ],
})
export class AppModule {}
