import { Injectable } from '@angular/core';
import { Resolve, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produit } from 'src/app/model/Produit';
import { ProductsRessourceService } from 'src/app/services/products/products-ressource.service';
import { ProduitsComponent } from './produits.component';

@Injectable({
  providedIn: 'root',
})
export class ProductRouteResolver implements Resolve<Produit[]> {
  constructor(private productsRessourceService: ProductsRessourceService) {}

  resolve(): Observable<Produit[]> {
    return this.productsRessourceService.getProducts().pipe(
      map((productsJson) => {
        return productsJson.map(
          (p) =>
            new Produit({
              ...p,
              retrievedImage: 'data:image/jpeg;base64,' + p.picByte,
            })
        );
      })
    );
  }
}

export const PRODUCT_ROUTES: Route[] = [
  {
    path: 'admin/produits',
    component: ProduitsComponent,
    resolve: {
      products: ProductRouteResolver,
    },
  },
];
