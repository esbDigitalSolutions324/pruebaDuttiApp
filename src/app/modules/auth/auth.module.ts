import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class AuthModule { }
