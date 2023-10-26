import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { OfficesComponent } from './Offices/offices.component';
import { RegisterComponent } from './Auth/register.component/register.component';
import { LoginComponent } from './Auth/login.component/login.component';
import { ReceptionistsComponent } from './Receptionist/receptionists.component';

import { OfficeService } from './Services/office.service';
import { AuthService } from './Services/auth.service';
import { ProfileService } from './Services/profile.service';

const appRoutes: Routes = [
    { path: 'Register', component: RegisterComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Offices', component: OfficesComponent },
    { path: 'Receptionists', component: ReceptionistsComponent },
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
        RegisterComponent,
        LoginComponent,
        OfficesComponent,
        ReceptionistsComponent
    ],
    providers: [
        OfficeService,
        AuthService,
        ProfileService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }