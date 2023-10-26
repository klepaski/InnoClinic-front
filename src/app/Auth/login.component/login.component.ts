import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from "../../Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private _authService: AuthService) { }

  email: string = '';
  password: string = '';
  errorsPresent: boolean;
  errors: HttpErrorResponse;

  login() {
    this._authService.login(this.email, this.password).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('refreshToken', res.refreshToken);
      },
      err => {
        console.log(err.message)
        this.errors = <HttpErrorResponse>err.error.errors
        this.errorsPresent = true
      }
    )
  }
}