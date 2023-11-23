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
  private _getAllUrl = this.port.gateway+"/Office/GetAll"
  private _getByIdUrl = this.port.gateway+"/Office/GetById/"
  private _deleteUrl = this.port.gateway+"/Office/Delete/"
  private _createUrl = this.port.gateway+"/Office/Create"
  private _updateUrl = this.port.gateway+"/Office/Update"
  private _changeStatusUrl = this.port.gateway+"/Office/ChangeStatus/"
  private _uploadUrl = this.port.gateway+"/Office/Upload"

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

  upload(file:File) {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<any>(this._uploadUrl, formData);
  }
}