import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CupboardsService } from 'src/app/services/cupboards.service';

@Component({
  selector: 'app-cupboard',
  templateUrl: 'cupboard.page.html',
  styleUrls: ['cupboard.page.scss'],
})
export class CupboardPage implements OnInit{

  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  userIngredients = [];

  constructor(private cupboardsService: CupboardsService) {
    /* this.ingredientsService.getTest().then(resp => {
      console.log(resp)
    }); */
  }

  async ngOnInit() {
    console.log('asdasd');
    await this.cupboardsService.getUserIngredients().then(resp => {
      console.log(resp);
      this.userIngredients = resp;
    });
  }

  onWillDismissEvent(event: Event) {
    console.log('hola', event)
  }

  hola(){
    console.log('asdasdas')
  }

  counter(i: number) {
    return new Array(i);
  }


}
