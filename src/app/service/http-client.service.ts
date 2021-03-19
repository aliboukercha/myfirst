import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Produit } from '../model/Produit';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }
  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }
  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }
  getProduits() {
    return this.httpClient.get<Produit[]>('http://localhost:8080/produits/get');
  }
  addProduit(newProduit: Produit) {
    return this.httpClient.post<Produit>('http://localhost:8080/produits/add', newProduit);
  }
  deleteProduit(id) {
    return this.httpClient.delete<Produit>('http://localhost:8080/produits/' + id);
  }
  updateProduit(updatedProduit: Produit) {
    return this.httpClient.put<Produit>('http://localhost:8080/produits/update', updatedProduit);
  }
}