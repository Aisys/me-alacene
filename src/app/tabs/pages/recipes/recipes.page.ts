import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { RecipesService } from 'src/app/services/recipes.service';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.page.html',
  styleUrls: ['recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  byOwnIngredients = false;
  recipes: any[] = [];
  constructor(
    private modalCtrl: ModalController,
    private recipesService: RecipesService,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {}

  async byIngredientsChange(event) {
    if (event.detail.checked) {
      await this.recipesService
        .getAllRecipesByIngredients()
        .then((resp) => {
          console.log(resp);
          this.recipes = resp as any;
        })
        .then(async (resp) => {
          await this.showLoading();
        });
    } else {
      await this.recipesService
        .getAllRecipes()
        .then((resp) => {
          console.log(resp);
          this.recipes = resp as any;
        })
        .then(async (resp) => {
          await this.showLoading();
        });
    }
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 200,
      spinner: 'circles',
    });

    loading.present();
  }

  counter(i: number) {
    return new Array(i);
  }

  async openModal(recipe) {
    const modal = await this.modalCtrl.create({
      component: ViewRecipeComponent,
      componentProps: {
        recipe,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
}
