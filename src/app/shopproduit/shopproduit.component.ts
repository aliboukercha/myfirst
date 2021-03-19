import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/Produit';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shopproduit',
  templateUrl: './shopproduit.component.html',
  styleUrls: ['./shopproduit.component.css']
})
export class ShopproduitComponent implements OnInit {

  produits: Array<Produit>;
  produitsRecieved: Array<Produit>;
  cartProduits: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getProduits().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    //from localstorage retrieve the cart item
    let data = localStorage.getItem('cart');
    //if this is not null convert it to JSON else initialize it as empty
    if (data !== null) {
      this.cartProduits = JSON.parse(data);
    } else {
      this.cartProduits = [];
    }
  }
  handleSuccessfulResponse(response) {
    this.produits = new Array<Produit>();
    //get books returned by the api call
    this.produitsRecieved = response;
    for (const produit of this.produitsRecieved) {

      const produitwithRetrievedImageField = new Produit();
      produitwithRetrievedImageField.id = produit.id;
      produitwithRetrievedImageField.name = produit.name;
      //populate retrieved image field so that book image can be displayed
      produitwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + produit.picByte;
      produitwithRetrievedImageField.author = produit.author;
      produitwithRetrievedImageField.price = produit.price;
      produitwithRetrievedImageField.picByte = produit.picByte;
      this.produits.push(produitwithRetrievedImageField);
    }
  }
  addToCart(produitId) {
    //retrieve book from books array using the book id
    let produit = this.produits.find(produit => {
      return produit.id === +produitId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected book to cart data
    cartData.push(produit);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    //produit.isAdded = true;
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

