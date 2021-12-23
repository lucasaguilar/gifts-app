import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start-page',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'start-page',
    loadChildren: () =>
      import('./pages/start-page/start-page.module').then(
        (m) => m.StartPagePageModule
      ),
  },
  {
    path: 'list-gifts',
    loadChildren: () => import('./pages/list-gifts/list-gifts.module').then( m => m.ListGiftsPageModule)
  },
  {
    path: 'search-page',
    loadChildren: () => import('./pages/search-page/search-page.module').then( m => m.SearchPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
