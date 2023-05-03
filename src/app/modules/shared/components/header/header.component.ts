import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(page:string){
    switch (page){
      case 'ships':
        this.router.navigate(['/principal/ships'])
        return 
      case 'PageTwo':
        this.router.navigate(['/principal/pageTwo'])
        return
      case 'PageOne':
        this.router.navigate(['/principal/pageOne'])
    }
  }

}
