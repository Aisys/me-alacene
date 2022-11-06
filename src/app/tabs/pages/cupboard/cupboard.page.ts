import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, LoadingController, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CupboardsService } from 'src/app/services/cupboards.service';
import { ViewIngredientComponent } from './view-ingredient/view-ingredient.component';

@Component({
  selector: 'app-cupboard',
  templateUrl: 'cupboard.page.html',
  styleUrls: ['cupboard.page.scss'],
})
export class CupboardPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  userIngredients = [];

  constructor(
    private modalCtrl: ModalController,
    private cupboardsService: CupboardsService,
    private loadingCtrl: LoadingController,
  ) {
    /* this.ingredientsService.getTest().then(resp => {
      console.log(resp)
    }); */
  }

  async ngOnInit() {
    console.log('asdasd');
    await this.cupboardsService.getUserIngredients().then((resp) => {
      console.log(resp);
      this.userIngredients = resp;
    });
    await this.showLoading();
  }

  onWillDismissEvent(event: Event) {
    console.log('hola', event);
  }

  hola() {
    console.log('asdasdas');
  }

  counter(i: number) {
    return new Array(i);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      duration: 200,
      spinner: 'circles',
    });

    loading.present();
  }

  async openModal(ingredient) {
    const modal = await this.modalCtrl.create({
      component: ViewIngredientComponent,
      componentProps: {
        ingredient,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
}
