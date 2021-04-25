import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/model/Produit';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsRessourceService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Produit[]>(
      `${environment.api.baseUrl}/products`
    );
  }
  addProduct(newProduit: Produit) {
    return this.httpClient.post<Produit>(
      `${environment.api.baseUrl}/products/add`,
      newProduit
    );
  }
  deleteProduct(id) {
    return this.httpClient.delete<Produit>(
      `${environment.api.baseUrl}/products/${id}`
    );
  }
  updateProduct(updatedProduit: Produit) {
    return this.httpClient.put<Produit>(
      `${environment.api.baseUrl}/products`,
      updatedProduit
    );
  }

  uploadImage(uploadData: FormData): Observable<unknown> {
    return this.httpClient.post(
      `${environment.api.baseUrl}/products/upload`,
      uploadData
    );
  }
}
