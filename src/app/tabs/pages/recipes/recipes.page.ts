import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.page.html',
  styleUrls: ['recipes.page.scss'],
})
export class RecipesPage {
  constructor(private modalCtrl: ModalController) {}

  counter(i: number) {
    return new Array(i);
  }

  async openModal(index) {
    const modal = await this.modalCtrl.create({
      component: ViewRecipeComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

}
