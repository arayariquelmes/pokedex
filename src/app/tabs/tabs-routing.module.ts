import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ver',
        loadChildren: () => import('../ver/ver.module').then( m => m.VerPageModule)
      },
      {
        path: 'agregar',
        loadChildren: () => import('../agregar/agregar.module').then( m => m.AgregarPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/agregar',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/agregar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
