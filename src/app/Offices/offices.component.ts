import { Component, OnInit } from '@angular/core';
import { OfficeService} from '../Services/office.service';
import { HttpErrorResponse } from '@angular/common/http'
import { Status } from '../Models/Office/Status';
import { Office } from '../Models/Office/Office';
import { CreateOffice } from "../Models/Office/CreateOffice";
import { UpdateOffice } from "../Models/Office/UpdateOffice";

@Component({
    selector: 'app-offices',
    styleUrls: ['./offices.component.css'],
    templateUrl: './offices.component.html'
})
export class OfficesComponent implements OnInit {
    enum: typeof Status = Status;
    offices: Office[];
    errorsPresent: boolean = false;
    error: HttpErrorResponse;
    newOffice:CreateOffice = new CreateOffice();
    updateOffice:UpdateOffice = new UpdateOffice();
    editableOfficeId: number;
    selectedImage: File;

    constructor(private _officeService: OfficeService)
  { }

  ngOnInit() {
    this._officeService.getAll().subscribe(
      res => { this.offices = res },
      err => console.log(err)
    );
  }

  editOffice(id: number) {
    this.editableOfficeId = id;
  }

  saveOffice(data:Office) {
    this.updateOffice.id = data.id;
    this.updateOffice.photoUrl = data.photoUrl;
    this.updateOffice.city = data.city;
    this.updateOffice.street = data.street;
    this.updateOffice.houseNumber = data.houseNumber;
    this.updateOffice.officeNumber = data.officeNumber;
    this.updateOffice.registryPhoneNumber = data.registryPhoneNumber;
    this.updateOffice.status = Number(data.status);
    
    this._officeService.update(this.updateOffice).subscribe(
        res => { 
          // this.ngOnInit();
          this.editableOfficeId = 0;
        },
        err => {
          console.log(err);
          this.errorsPresent = true;
          this.error = err;
        }
      )
    }

  create() {
    this.newOffice.status = Number(this.newOffice.status);
    this._officeService.create(this.newOffice).subscribe(
      res => { this.ngOnInit() },
      err => {
        console.log(err);
          this.errorsPresent = true;
          this.error = err;
      }
    )
  }

  delete(id:number) {
    this._officeService.delete(id).subscribe(
      res => { this.ngOnInit() },
      err => {
        console.log(err);
          this.errorsPresent = true;
          this.error = err;
      }
    )
  }

  handleImageUpload(files: FileList) {
    console.log("handleImageUpload");
    console.log(this.selectedImage);
    // const file = files.item(0);
    // if (!file) return;
    // this.selectedImage = file;
    // this._officeService.upload(file);
    this._officeService.upload(this.selectedImage);
  }

  fileChangeEvent(e: File[]){
    var file = e[0];
    console.log(file);
    console.log(file.type);
    this._officeService.upload(file).subscribe(
      res => {
        this.newOffice.photoUrl = res.imageUrl;
      },
      err => {
        console.log(err);
          this.errorsPresent = true;
          this.error = err;
      }
    )
  }
}