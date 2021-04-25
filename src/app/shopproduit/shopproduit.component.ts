import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/Produit';
import { ProductsRessourceService } from '../services/products/products-ressource.service';

@Component({
  selector: 'app-shopproduct',
  templateUrl: './shopproduit.component.html',
  styleUrls: ['./shopproduit.component.css'],
})
export class ShopproduitComponent implements OnInit {
  produits: Array<Produit>;
  produitsRecieved: Array<Produit>;
  cartProduits: any;

  constructor(
    private router: Router,
    private productsRessourceService: ProductsRessourceService
  ) {}

  ngOnInit() {
    this.productsRessourceService
      .getProducts()
      .subscribe((response) => this.handleSuccessfulResponse(response));

    let data = localStorage.getItem('cart');

    if (data !== null) {
      this.cartProduits = JSON.parse(data);
    } else {
      this.cartProduits = [];
    }
  }
  handleSuccessfulResponse(response) {
    this.produits = new Array<Produit>();

    this.produitsRecieved = response;
    for (const produit of this.produitsRecieved) {
      const produitwithRetrievedImageField = new Produit();
      produitwithRetrievedImageField.id = produit.id;
      produitwithRetrievedImageField.name = produit.name;

      produitwithRetrievedImageField.retrievedImage =
        'data:image/jpeg;base64,' + produit.picByte;
      produitwithRetrievedImageField.author = produit.author;
      produitwithRetrievedImageField.price = produit.price;
      produitwithRetrievedImageField.picByte = produit.picByte;
      this.produits.push(produitwithRetrievedImageField);
    }
  }
  addToCart(produitId) {
    let produit = this.produits.find((produit) => {
      return produit.id === +produitId;
    });
    let cartData = [];

    let data = localStorage.getItem('cart');

    if (data !== null) {
      cartData = JSON.parse(data);
    }

    cartData.push(produit);

    this.updateCartData(cartData);

    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  updateCartData(cartData) {
    this.cartProduits = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartProduits = [];
    localStorage.clear();
  }
}
