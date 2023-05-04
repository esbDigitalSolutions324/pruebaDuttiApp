import { createReducer, on} from "@ngrx/store";
import {Starship} from "../../shared/models/starshipModel";
import { shipsFetchAPISuccess } from "./ship.action";


export const initialState: ReadonlyArray<Starship> = [];


export const shipReducer = createReducer(
    initialState,
    on(shipsFetchAPISuccess, (state, { allShips }) => {
        return allShips;
      })
);