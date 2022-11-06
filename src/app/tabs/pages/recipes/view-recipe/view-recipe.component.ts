import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-view-recipe',
  templateUrl: 'view-recipe.component.html',
  styleUrls: ['view-recipe.component.scss'],
})
export class ViewRecipeComponent implements OnInit {
  recipe: any = {};
  @Output() onWillDismissEvent = new EventEmitter<any>();

  constructor(private modalCtrl: ModalController, private alertController: AlertController) {}

  ngOnInit(): void {
    console.log(this.recipe);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss('asdasd', 'confirm');
  }
  onWillDismiss(event: Event) {
    this.recipe = {};
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    this.onWillDismissEvent.emit(ev.detail);
  }

  async cocinar() {
    const alert = await this.alertController.create({
      header: 'Atención',
      subHeader: '¿Cocinar esta receta?',
      message: 'Al aceptar, se descontarán de tu alacena los ingredientes utilizados.',
      buttons: ['Aceptar', 'Cancelar'],
    });

    await alert.present();
  }
}
