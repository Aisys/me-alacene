import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CupboardsService } from 'src/app/services/cupboards.service';

@Component({
  selector: 'app-view-ingredient',
  templateUrl: 'view-ingredient.component.html',
  styleUrls: ['view-ingredient.component.scss'],
})
export class ViewIngredientComponent {

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
