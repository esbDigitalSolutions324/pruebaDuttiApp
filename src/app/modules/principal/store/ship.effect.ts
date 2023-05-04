import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import {map,mergeMap,switchMap,withLatestFrom} from 'rxjs/operators'
import { ShipsService } from '../../../services/ships.service';
import { shipsFetchAPISuccess,invokeShipsAPI, invokeShipsPerPageAPI } from './ship.action';
import {selectShips } from './ship.selector';


@Injectable()
export class ShipEffect {

    constructor(
        private actions$: Actions,
        private shipsService: ShipsService,
        private store: Store
      ) {}


      loadAllShips$ = createEffect(() =>
      this.actions$.pipe(
        ofType(invokeShipsAPI),
        withLatestFrom(this.store.pipe(select(selectShips))),
        mergeMap(([, shipsformStore]) => {
          if (shipsformStore.length > 0) {
           
            return EMPTY;
            
          }
          
          return this.shipsService
            .getShips()
            .pipe(map((data) => shipsFetchAPISuccess({ allShips: data })));
        })
      )
    );



    loadAllShipsPerPage$ = createEffect(() =>
      this.actions$.pipe(
        ofType(invokeShipsPerPageAPI),
        switchMap((action) => {
          
          
          return this.shipsService
            .getShipsPerPage(action.page)
            .pipe(map((data) => shipsFetchAPISuccess({ allShips: data })));
        })
      )
    );

}
