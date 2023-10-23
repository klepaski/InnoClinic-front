import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }   from './app.component';
import { OfficesTableComponent } from './Offices/offices-table/offices-table.component';
import { CreateOfficeComponent } from './Offices/create-office/create-office.component';
import { UpdateOfficeComponent } from './Offices/update-office/update-office.component';
import { OfficeService } from './Services/office.service';

import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes =[
    { path: 'AllOffices', component: OfficesTableComponent },
    { path: 'CreateOffice', component: CreateOfficeComponent },
    { path: 'UpdateOffice/:id', component: UpdateOfficeComponent }
];



@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [ 
        AppComponent,
        OfficesTableComponent,
        CreateOfficeComponent,
        UpdateOfficeComponent
    ],
    providers: [ OfficeService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }