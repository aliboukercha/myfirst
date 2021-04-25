import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/pages/login/auth.service';
import { Principal } from 'src/app/pages/login/principal';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthInterceptorService implements HttpInterceptor {
  private principal: Principal;
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.principal$.subscribe((principal: Principal) => {
      this.principal = principal;
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.principal) {
      if (!req.headers.get('Authorization')) {
        req = req.clone({
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `${this.principal.token}`,
          }),
        });
      }
    }
    return next.handle(req);
  }
}
