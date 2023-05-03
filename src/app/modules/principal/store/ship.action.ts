import { createAction, props } from '@ngrx/store';

import {Starship} from "../../shared/models/starshipModel";

export const invokeShipsAPI = createAction(
    '[Ships API] Invoke Ships Fetch API'
  );

  export const invokeShipsPerPageAPI = createAction(
    '[Ships API] Invoke Ships Per Page Fetch API',
    props<{ page: number }>()
  );
   
  export const shipsFetchAPISuccess = createAction(
    '[Ships API] Fetch Ships Success',
    props<{ allShips: Starship[] }>()
  );