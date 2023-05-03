import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ShipsService } from 'src/app/services/ships.service';
import { selectShips } from '../../store/ship.selector';
import { invokeShipsPerPageAPI } from '../../store/ship.action';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  public dataList: any ;
  ships$ = this.store.pipe(select(selectShips));
  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(invokeShipsPerPageAPI({page:1}))
    this.ships$.subscribe(ships=>{
      this.dataList=ships;
    })
  }

}
