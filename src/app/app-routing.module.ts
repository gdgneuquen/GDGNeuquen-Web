import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/core/core.module#CoreModule',
    // canActivate: [NgxPermissionsGuard],
    // data: {
    //   permissions: {
    //     only: ['Guardia', 'Administrador'],
    //   }
    // }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
