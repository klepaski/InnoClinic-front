import { Component } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {CreateOffice} from "../../Models/Office/CreateOffice";
import {OfficeService} from "../../Services/office.service";
import { Status } from 'src/app/Models/Office/Status';

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent{

  constructor(private _officeService: OfficeService) { }

  response:boolean = false;
  newOffice:CreateOffice = new CreateOffice();
  errorsPresent: boolean;
  errors: HttpErrorResponse;

  create() {
    this.newOffice.status = Number(this.newOffice.status);
    this._officeService.create(this.newOffice).subscribe(
      res => { this.response = true; },
      err => {
        console.log(err.message)
        this.errors = <HttpErrorResponse>err.error.errors
        this.errorsPresent = true
      }
    )
  }
}