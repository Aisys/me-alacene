import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CupboardsService } from 'src/app/services/cupboards.service';

@Component({
  selector: 'app-view-ingredient',
  templateUrl: 'view-ingredient.component.html',
  styleUrls: ['view-ingredient.component.scss'],
})
export class ViewIngredientComponent {

  ingredient:any = {};
  @Output() onWillDismissEvent = new EventEmitter<any>();

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit(): void {
    console.log(this.ingredient);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss('asdasd', 'confirm');
  }
  onWillDismiss(event: Event) {
    this.ingredient = {};
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    this.onWillDismissEvent.emit(ev.detail)
  }
}
