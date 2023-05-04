import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardLogGuard } from './modules/auth/guards/guard-log.guard';
import { PrincipalGuard } from './modules/auth/guards/principal.guard';
// Components
;

const routes: Routes = [
  {
    path: '',
    canActivate:[PrincipalGuard],
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  
  { path: 'principal', 
  canActivate:[GuardLogGuard],
  loadChildren: () => import(`./modules/principal/principal.module`).then(m => m.PrincipalModule)
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
