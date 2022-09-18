import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CupboardPage } from './cupboard.page';

const routes: Routes = [
  {
    path: '',
    component: CupboardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CupboardPageRoutingModule {}
