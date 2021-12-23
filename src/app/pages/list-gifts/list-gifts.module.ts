import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListGiftsPageRoutingModule } from './list-gifts-routing.module';

import { ListGiftsPage } from './list-gifts.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListGiftsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListGiftsPage]
})
export class ListGiftsPageModule {}
