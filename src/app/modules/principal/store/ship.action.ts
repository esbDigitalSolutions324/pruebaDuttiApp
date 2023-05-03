import { createAction, props } from '@ngrx/store';

import {Starship} from "../../shared/models/starshipModel";

export const invokeShipsAPI = createAction(
    '[Ships API] Invoke Ships Fetch API'
  );
   
  export const shipsFetchAPISuccess = createAction(
    '[Ships API] Fetch Ships Success',
    props<{ allShips: Starship[] }>()
  );