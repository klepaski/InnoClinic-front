import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { OfficesComponent } from './Offices/offices.component';
import { RegisterComponent } from './Auth/register.component/register.component';

import { OfficeService } from './Services/office.service';
import { AuthService } from './Services/auth.service';

const appRoutes: Routes = [
    { path: 'Offices', component: OfficesComponent },
    { path: 'Register', component: RegisterComponent }
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
        OfficesComponent,
        RegisterComponent
    ],
    providers: [
        OfficeService,
        AuthService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }