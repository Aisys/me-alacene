import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'cupboard',
        loadChildren: () => import('./pages/cupboard/cupboard.module').then(m => m.CupboardPageModule)
      },
      {
        path: 'recipes',
        loadChildren: () => import('./pages/recipes/recipes.module').then(m => m.RecipesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/cupboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/cupboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
