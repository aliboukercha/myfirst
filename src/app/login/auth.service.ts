import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Principal } from './principal';

const LS_TOKEN_KEY = 'authenticatedUser';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private principalSubject = new BehaviorSubject<Principal>(null);
  principal$: Observable<Principal> = this.principalSubject.asObservable();

  constructor(private http: HttpClient) {
    this.principalSubject.next(this.readPrincipalFromStorage());
  }

  login(username: string, password: string) {
    const token = this.createBasicAuthToken(username, password);
    return this.http
      .get(`${environment.api.baseUrl}/api/v1/basicauth`, {
        headers: {
          authorization: token,
        },
      })
      .pipe(
        map((res) => {
          const principal = {
            username,
            token,
          };
          this.writePrincipalToStorage(principal);
          this.principalSubject.next(principal);
        })
      );
  }
  writePrincipalToStorage(principal: Principal) {
    localStorage.setItem(LS_TOKEN_KEY, JSON.stringify(principal));
  }

  private readPrincipalFromStorage(): Principal | null {
    return JSON.parse(localStorage.getItem(LS_TOKEN_KEY));
  }
  private createBasicAuthToken(username: string, password: string) {
    return `Basic ${btoa(username + ':' + password)}`;
  }

  logout() {
    this.writePrincipalToStorage(null);
    this.principalSubject.next(null);
  }
}
