import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth-service.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private _auth: AuthService
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

  logout(){
    this._auth.logout();
    swal.fire('Now You are logout', '','warning');
    setTimeout(()=>{
      this.router.navigate(['/'])
    },1500)
  }

}
