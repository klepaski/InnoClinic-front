import { UpdateReceptionist } from './../Models/Profile/Receptionist/UpdateReceptionist';
import { CreateReceptionist } from './../Models/Profile/Receptionist/CreateReceptionist';
import { ReceptionistResponse } from './../Models/Profile/Receptionist/ReceptionistResponse';
import { Component, OnInit } from '@angular/core';
import { OfficeService} from '../Services/office.service';
import { ProfileService} from '../Services/profile.service';
import { HttpErrorResponse } from '@angular/common/http'
import { Office } from '../Models/Office/Office';

@Component({
    selector: 'app-receptionists',
    styleUrls: ['./receptionists.component.css'],
    templateUrl: './receptionists.component.html'
})
export class ReceptionistsComponent implements OnInit {
    receptionists: ReceptionistResponse[];
    offices: Office[];
    errorsPresent: boolean = false;
    error: HttpErrorResponse;
    newReceptionist:CreateReceptionist = new CreateReceptionist();
    updateReceptionist:UpdateReceptionist = new UpdateReceptionist();
    editableId: number;

    constructor(private _profileService: ProfileService, private _officeService: OfficeService)
    { }

  ngOnInit() {
    this._officeService.getAll().subscribe(
      res => { this.offices = res },
      err => console.log(err)
    );
    this._profileService.getAllReceptionists().subscribe(
        res => { this.receptionists = res },
        err => console.log(err)
    )
  }

  edit(id: number) {
    this.editableId = id;
  }

  save(data:ReceptionistResponse) {
    this.updateReceptionist.id = data.id;
    this.updateReceptionist.photoUrl = data.photoUrl;
    this.updateReceptionist.firstName = data.firstName;
    this.updateReceptionist.lastName = data.lastName;
    this.updateReceptionist.middleName = data.middleName;
    this.updateReceptionist.officeId = data.officeId;

    this._profileService.updateReceptionist(this.updateReceptionist).subscribe(
        err => {
          console.log(err);
          this.errorsPresent = true;
          this.error = err;
        }
      )
      this.editableId = 0;
    }

  create() {
    this._profileService.createReceptionist(this.newReceptionist).subscribe(
      err => {
        console.log(err);
          this.errorsPresent = true;
          this.error = err;
      }
    )
    this.ngOnInit();
  }

  delete(id:number) {
    this._profileService.deleteReceptionist(id).subscribe(
      err => {
        console.log(err);
          this.errorsPresent = true;
          this.error = err;
      }
    )
    this.ngOnInit();
  }
}