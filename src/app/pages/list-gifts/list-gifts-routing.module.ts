import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { ListGiftsPage } from './list-gifts.page';

const routes: Routes = [
  {
    path: '',
    component: ListGiftsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class ListGiftsPageRoutingModule {}
