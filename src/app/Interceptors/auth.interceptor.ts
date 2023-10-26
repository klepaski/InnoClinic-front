import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { throwError, from } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(authReq).pipe(
        catchError((error:HttpErrorResponse) => {
            if (error.status === 401) { //} && error.error === 'TokenExpired') {
                console.log(error.error);
                this._authService.refreshToken(token, refreshToken).subscribe(
                    res => {
                        localStorage.setItem('token', res.token);
                        localStorage.setItem('refreshToken', res.refreshToken);
                        const newAuthReq = req.clone({
                            headers: req.headers.set('Authorization', `Bearer ${res.token}`)
                        });
                        return next.handle(newAuthReq);
                    },
                    err => { console.log(err.message) }
                )
            }
            return throwError(error);
        })
    )}
}