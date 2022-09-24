import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: 'user-settings.page.html',
  styleUrls: ['user-settings.page.scss']
})
export class UserSettingsPage {

  @ViewChild(IonModal) modal: IonModal;
  @Output() onWillDismissEvent = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  logout() {
    this.modal.dismiss(null, 'cancel');
    this.router.navigate(['/login']);
  }

  confirm() {
    this.modal.dismiss('unonuevo', 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    this.onWillDismissEvent.emit(ev.detail)
  }

}
