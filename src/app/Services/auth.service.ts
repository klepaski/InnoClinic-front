import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Port } from '../Models/Port';
import { RegisterRequest } from '../Models/Auth/RegisterRequest';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  port:Port = new Port();
  private _registerUrl = "http://localhost:"+this.port.orchestrator+"/Orchestrator/Register"

  constructor(private http: HttpClient) { }

  register(newUser:RegisterRequest){
    return this.http.post<any>(this._registerUrl, newUser)
  }

}