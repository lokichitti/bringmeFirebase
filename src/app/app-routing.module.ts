import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'sign-up', loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'inside-main', loadChildren: './pages/inside-main/inside-main.module#InsideMainPageModule' },
  { path: 'public', loadChildren: './pages/public/public.module#PublicPageModule' },
  { path: 'private', loadChildren: './pages/private/private.module#PrivatePageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'product', loadChildren: './pages/product/product.module#ProductPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'info', loadChildren: './pages/info/info.module#InfoPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
