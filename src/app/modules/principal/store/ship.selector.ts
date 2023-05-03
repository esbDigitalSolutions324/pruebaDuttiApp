import { createFeatureSelector } from '@ngrx/store';
import {Starship} from "../../shared/models/starshipModel";

export const selectShips= createFeatureSelector<Starship[]>('myships');