import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { RegisterComponent } from './modules/auth/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  //{ path: 'register', component: RegisterComponent},
  //{ path: 'principal', loadChildren: () => import(`./modules/principal/principal.module`).then(m => m.PrincipalModule) }
  // { path: 'ships', loadChildren: () => import(`./components/ships/ships.module`).then(m => m.ShipsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
