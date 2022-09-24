import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss']
})
export class RegisterPage {

  constructor(private router: Router) { console.log('asdasdas') }

  register() {
    this.router.navigate(['tabs', 'cupboard']);
  }

}
