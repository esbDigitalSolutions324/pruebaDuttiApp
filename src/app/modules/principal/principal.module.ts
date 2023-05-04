import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';

// Components

import { PrincipalComponent } from './components/principal/principal.component';
import { ShipsDetailsComponent } from './components/ships/ships-details/ships-details.component';
import { ShipsComponent } from './components/ships/ships.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { shipReducer } from './store/ship.reducer';
import{ ShipEffect } from './store/ship.effect'


@NgModule({
  declarations: [
    ShipsComponent,
    ShipsDetailsComponent,
    PageOneComponent,
    PageTwoComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    SharedModule,
    StoreModule.forFeature('myships', shipReducer),
    EffectsModule.forFeature([ShipEffect])
  ]
})
export class PrincipalModule { }