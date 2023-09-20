import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,NgModel } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonessegPageRoutingModule } from './botonesseg-routing.module';

import { BotonessegPage } from './botonesseg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonessegPageRoutingModule,
  ],
  declarations: [BotonessegPage]
})
export class BotonessegPageModule {}
