import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-cupboard',
  templateUrl: 'cupboard.page.html',
  styleUrls: ['cupboard.page.scss'],
})
export class CupboardPage {

  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;


  constructor(private ingredientsService: IngredientsService) {
    this.ingredientsService.getTest().then(resp => {
      console.log(resp)
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  counter(i: number) {
    return new Array(i);
  }


}
