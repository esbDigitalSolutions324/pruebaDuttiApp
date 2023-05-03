import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectShips } from '../../store/ship.selector';
import { invokeShipsPerPageAPI } from '../../store/ship.action';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  public dataList: any ;
  ships$ = this.store.pipe(select(selectShips));
  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(invokeShipsPerPageAPI({page:2}))
    this.ships$.subscribe(ships=>{
      this.dataList=ships;
    })
  }

}
