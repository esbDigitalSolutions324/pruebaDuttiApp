import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import usersList from 'src/assets/json/users.json';
import { AuthService } from '../../services/auth-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers:[AuthService]
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(private fb: FormBuilder,
    private _auth:AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
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

  login(){
    this._auth.login(this.loginForm.get('username').value,this.loginForm.get('password').value).then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
}

}
