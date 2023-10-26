import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponseBase } from '@angular/common/http'
import { Port } from '../Models/Port';
import { CreateReceptionist } from '../Models/Profile/Receptionist/CreateReceptionist';
import { UpdateReceptionist } from '../Models/Profile/Receptionist/UpdateReceptionist';
import { ReceptionistResponse } from '../Models/Profile/Receptionist/ReceptionistResponse';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  port:Port = new Port();
  private _getAllReceptionistsUrl = this.port.gateway+"/Receptionist/GetAll"
  private _getReceptionistByIdUrl = this.port.gateway+"/Receptionist/GetById/"
  private _deleteReceptionistUrl = this.port.gateway+"/Receptionist/Delete/"
  private _createRecetionistUrl = this.port.gateway+"/Receptionist/Create"
  private _updateReceptionistUrl = this.port.gateway+"/Receptionist/Update"

  constructor(private http: HttpClient) { }

  getAllReceptionists(){
    return this.http.get<any>(this._getAllReceptionistsUrl)
  }
  getReceptionistById(id){
    return this.http.get<any>(this._getReceptionistByIdUrl + id)
  }
  deleteReceptionist(id){
    return this.http.delete<any>(this._deleteReceptionistUrl + id)
  }
  createReceptionist(newReceptionist:CreateReceptionist){
    return this.http.post<any>(this._createRecetionistUrl, newReceptionist)
  }
  updateReceptionist(newReceptionist:UpdateReceptionist){
    return this.http.put<any>(this._updateReceptionistUrl, newReceptionist)
  }


}