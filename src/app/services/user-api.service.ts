import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.api.baseUrl}/users`);
  }
  addUser(newUser: User) {
    return this.httpClient.post<User>(
      `${environment.api.baseUrl}/users/add`,
      newUser
    );
  }
  deleteUser(id) {
    return this.httpClient.delete<User>(
      `${environment.api.baseUrl}/users/` + id
    );
  }
}
