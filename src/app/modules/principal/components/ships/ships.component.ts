import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { invokeShipsAPI } from 'src/app/modules/principal/store/ship.action';
import { selectShips } from 'src/app/modules/principal/store/ship.selector';
import { ShipsService } from 'src/app/services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: any = [];
  books$ = this.store.pipe(select(selectShips));

  constructor( 
    private store: Store,
    private shipsService: ShipsService
    ) {}

  ngOnInit(): void {

    this.store.dispatch(invokeShipsAPI());
    this.shipsService.getShips().subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', this.dataList.results)
    })
  }
}
