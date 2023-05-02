import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// JSON
import usersList from 'src/assets/json/users.json';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _auth:AuthService
  ) { }

  ngOnInit(): void {
    
  }
  loginUser() {
    if (this.loginForm.invalid) { return }
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios
    var userLogin = this.loginForm.value.username;
    var filterJson = this.users.filter(function (user) { return user.first_name === userLogin  });
    if (filterJson.length > 0) {
      this.router.navigate(['/principal/ships'])
    } else {
      this.unregistered = true;
    }
  }


 


}

