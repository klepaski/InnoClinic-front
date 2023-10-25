import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponseBase } from '@angular/common/http'
import { Port } from '../Models/Port';
import { CreateOffice } from '../Models/Office/CreateOffice';
import { UpdateOffice } from '../Models/Office/UpdateOffice';

@Injectable({
  providedIn: 'root'
})

export class OfficeService {
  port:Port = new Port();
  private _getAllUrl = "http://localhost:"+this.port.offices+"/Office/GetAll"
  private _getByIdUrl = "http://localhost:"+this.port.offices+"/Office/GetById/"
  private _deleteUrl = "http://localhost:"+this.port.offices+"/Office/Delete/"
  private _createUrl = "http://localhost:"+this.port.offices+"/Office/Create"
  private _updateUrl = "http://localhost:"+this.port.offices+"/Office/Update"
  private _changeStatusUrl = "http://localhost:"+this.port.offices+"/Office/ChangeStatus/"

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>(this._getAllUrl)
  }

  getById(id){
    return this.http.get<any>(this._getByIdUrl + id)
  }

  delete(id){
    return this.http.delete<any>(this._deleteUrl + id)
  }

  create(newOffice:CreateOffice){
    return this.http.post<any>(this._createUrl, newOffice)
  }

  update(newOffice:UpdateOffice){
    return this.http.put<HttpResponseBase>(this._updateUrl, newOffice)
  }

  changeStatus(id:number, status:string){
    const params = id + "/" + status;
    return this.http.put<HttpResponseBase>(this._changeStatusUrl + params, null)
  }
}