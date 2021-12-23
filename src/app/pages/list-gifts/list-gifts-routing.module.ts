import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListGiftsPage } from './list-gifts.page';

const routes: Routes = [
  {
    path: '',
    component: ListGiftsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListGiftsPageRoutingModule {}
