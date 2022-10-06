import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CupboardsService } from 'src/app/services/cupboards.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: 'add-ingredient.component.html',
  styleUrls: ['add-ingredient.component.scss'],
})
export class AddIngredientComponent {

  @ViewChild(IonModal) modal: IonModal;
  @Output() onWillDismissEvent = new EventEmitter<any>();

  constructor(private cupboardsService: CupboardsService) {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('unonuevo', 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    this.onWillDismissEvent.emit(ev.detail)
  }

}
