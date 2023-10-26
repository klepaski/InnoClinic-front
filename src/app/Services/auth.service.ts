import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Port } from '../Models/Port';
import { RegisterRequest } from '../Models/Auth/RegisterRequest';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  port:Port = new Port();
  private _registerUrl = this.port.gateway+"/Orchestrator/Register";
  private _loginUrl = this.port.gateway+"/Auth/Login";
  private _refreshTokenUrl = this.port.gateway+"/Auth/Refresh";

  constructor(private http: HttpClient) { }

  register(newUser:RegisterRequest){
    return this.http.post<any>(this._registerUrl, newUser)
  }

  login(email:string, password:string){
    const req = { email: email, password: password };
    return this.http.post<any>(this._loginUrl, req);
  }

  refreshToken(token:string, refreshToken:string) {
    const req = { accessToken: token, refreshToken: refreshToken}
    return this.http.post<any>(this._refreshTokenUrl, req);
  }
}