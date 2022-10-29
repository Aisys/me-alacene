import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesPage } from './recipes.page';

import { RecipesService } from './../../../services/recipes.service';

import { RecipesPageRoutingModule } from './recipes-routing.module';
import { MainToolbarModule } from 'src/app/public/main-toolbar/main-toolbar.module';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RecipesPageRoutingModule,
    MainToolbarModule,
  ],
  declarations: [RecipesPage, ViewRecipeComponent],
  providers: [RecipesService]
})
export class RecipesPageModule {}
