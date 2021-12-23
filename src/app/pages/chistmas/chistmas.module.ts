import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChistmasPageRoutingModule } from './chistmas-routing.module';

import { ChistmasPage } from './chistmas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChistmasPageRoutingModule
  ],
  declarations: [ChistmasPage]
})
export class ChistmasPageModule {}
