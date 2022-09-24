import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './public/login/login.page';
import { RegisterPage } from './public/register/register.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    component: LoginPage,
    loadChildren: () => import('./public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    component: RegisterPage,
    loadChildren: () => import('./public/register/register.module').then(m => m.RegisterModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
