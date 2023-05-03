import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
;

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  
  { path: 'principal', loadChildren: () => import(`./modules/principal/principal.module`).then(m => m.PrincipalModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
