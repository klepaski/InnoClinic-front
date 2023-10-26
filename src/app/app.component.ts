import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})
export class AppComponent {
    isAuthenticated: boolean = false;
    title = "InnoClinic";

    constructor() {
        const token = localStorage.getItem('token');
        if (token) {
          this.isAuthenticated = true;
        }
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    }
}