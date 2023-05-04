import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { shipReducer } from '../principal/store/ship.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShipEffect } from '../principal/store/ship.effect';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ]
})
export class CoreModule { }
