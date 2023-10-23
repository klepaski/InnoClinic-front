import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeService} from '../../Services/office.service';
import {HttpErrorResponse} from '@angular/common/http'
import { Status } from '../../Models/Office/Status';
import { Office } from '../../Models/Office/Office';

@Component({
    selector: 'app-offices-table',
    styleUrls: ['./offices-table.component.css'],
    templateUrl: './offices-table.component.html'
})
export class OfficesTableComponent implements OnInit {
    enum: typeof Status = Status;
    offices: Office[];
    errorsPresent: boolean;
    error: HttpErrorResponse;

    constructor(private _officeService: OfficeService, private route: ActivatedRoute, private _router:Router)
  { }

  ngOnInit() {
    this._officeService.getAll().subscribe(
      res => { this.offices = res },
      err => console.log(err)
    );
  }

//   viewOffice(office:Office) {
//     this._router.navigate(["../EditOffice/" + office.id])
//   }

  delete(id:number) {
    this._officeService.delete(id).subscribe(
      res => { this.ngOnInit() },
      err => {
        this.errorsPresent = true
        this.error = err
        console.log(err)
      }
    )
  }
}