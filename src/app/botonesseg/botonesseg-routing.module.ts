import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonessegPage } from './botonesseg.page';

const routes: Routes = [
  {
    path: '',
    component: BotonessegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonessegPageRoutingModule {}
