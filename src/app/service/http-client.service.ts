import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Produit } from '../model/Produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getUsers(): Observable<User[]>
  {
    return this.httpClient.get<User[]>('http://localhost:8080/users');
  }
  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }
  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }
}