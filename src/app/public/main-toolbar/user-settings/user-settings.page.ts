import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: 'user-settings.page.html',
  styleUrls: ['user-settings.page.scss']
})
export class UserSettingsPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  @Output() onWillDismissEvent = new EventEmitter<any>();

  rangeCalc = 0;

  userForm = new FormGroup({
    dateBirth: new FormControl('1999-04-29'),
    gender: new FormControl('f'), // 
    height: new FormControl(170),
    weight: new FormControl(56),
    activitie: new FormControl(1.550), //
    calories: new FormControl(3000),
  });

  constructor(private router: Router) {
  }


  ngOnInit() {
    if (this.userForm.getRawValue().gender === 'f') {
      this.rangeCalc = (655 + (9.6 * this.userForm.getRawValue().weight) ) + ( (1.8 * this.userForm.getRawValue().height) - (4.7 * 22)) * this.userForm.getRawValue().activitie;
    } else {
      this.rangeCalc = (66 + (13.7 * this.userForm.getRawValue().weight) ) + ( (5 * this.userForm.getRawValue().height) - (6.8 * 22)) * this.userForm.getRawValue().activitie;
    }
    this.userForm.valueChanges.subscribe(res => {
      if (res.gender === 'f') {
        this.rangeCalc = (655 + (9.6 * res.weight) ) + ( (1.8 * res.height) - (4.7 * 22)) * res.activitie;
      } else {
        this.rangeCalc = (66 + (13.7 * res.weight) ) + ( (5 * res.height) - (6.8 * 22)) * res.activitie;
      }
    })
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
