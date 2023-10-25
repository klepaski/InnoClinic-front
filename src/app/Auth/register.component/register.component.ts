import { Component } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import { RegisterRequest } from './../../Models/Auth/RegisterRequest';
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private _authService: AuthService) { }

  response:boolean = false;
  newUser:RegisterRequest = new RegisterRequest();
  errorsPresent: boolean;
  errors: HttpErrorResponse;

  register() {
    this.newUser.role = Number(this.newUser.role);
    this._authService.register(this.newUser).subscribe(
      res => { this.response = true; },
      err => {
        console.log(err.message)
        this.errors = <HttpErrorResponse>err.error.errors
        this.errorsPresent = true
      }
    )
  }
}