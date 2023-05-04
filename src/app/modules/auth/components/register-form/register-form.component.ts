import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  providers:[AuthService]
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: [ '', [Validators.required, Validators.minLength(3)]],
      last_name: [ '', [Validators.required, Validators.minLength(3)]],
      username: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],
      password:['',[Validators.required, Validators.minLength(7) ]]
    })
  }

  registerUser() {
    this._auth.register(this.registerForm.get('email').value, this.registerForm.get('password').value).then(response => {
      swal.fire('Registro exitoso...', '','success');
    })
    .catch(error =>
       {
        console.log(error)
        swal.fire('Registro fallido...', '','error');
       }
       );
    this.router.navigate(['/'])
   

  }

}
