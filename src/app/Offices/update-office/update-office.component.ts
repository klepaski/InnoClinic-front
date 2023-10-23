import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {UpdateOffice} from "../../Models/Office/UpdateOffice";
import {OfficeService} from "../../Services/office.service";

@Component({
  selector: 'app-update-office',
  templateUrl: './update-office.component.html',
  styleUrls: ['./update-office.component.css']
})
export class UpdateOfficeComponent implements OnInit {

  constructor(private _officeService: OfficeService, private route: ActivatedRoute)
  { 
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }

  id: number;
  response:boolean = false;
  newOffice:UpdateOffice = new UpdateOffice();
  errorsPresent: boolean;
  errors: HttpErrorResponse;
  private routeSubscription: Subscription;

  ngOnInit() {
    if (this.id != undefined)
    {
      this._officeService.getById(this.id).subscribe(
        data => {
          this.newOffice.id = this.id;
          this.newOffice.photoUrl = data.photoUrl;
          this.newOffice.city = data.city;
          this.newOffice.street = data.street;
          this.newOffice.houseNumber = data.houseNumber;
          this.newOffice.officeNumber = data.officeNumber;
          this.newOffice.registryPhoneNumber = data.registryPhoneNumber;
          this.newOffice.status = data.status;
        },
        error => console.log(error)
      );
    }
  }

  update() {
    this.newOffice.status = Number(this.newOffice.status);
    this._officeService.update(this.newOffice).subscribe(
      res => { this.response = true; },
      err => {
        console.log(err.message)
        this.errors = <HttpErrorResponse>err.error.errors
        this.errorsPresent = true
      }
    )
  }
}