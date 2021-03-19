import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/Produit';
import { HttpClientService } from '../../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits: Array<Produit>;
  produitsRecieved: Array<Produit>;
  selectedProduit: Produit;
  action: string;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.refreshData();
    }
    refreshData() {
      this.httpClientService.getProduits().subscribe(
        response => this.handleSuccessfulResponse(response)
      );
      this.activedRoute.queryParams.subscribe(
        (params) => {
          // get the url parameter named action. this can either be add or view.
          this.action = params['action'];
    // get the parameter id. this will be the id of the book whose details 
    // are to be displayed when action is view.
    const id = params['id'];
    // if id exists, convert it to integer and then retrive the book from
    // the books array
         if (id) { 
           
            this.selectedProduit = this.produits.find(produit => {
              return produit.id === +id;
              
            });
          }
        }
      );
      
      
      
      
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
      produitwithRetrievedImageField.picByte=produit.picByte;
      this.produits.push(produitwithRetrievedImageField);
    }
    }
  
    addProduit() {
      this.selectedProduit = new Produit();
      this.router.navigate(['admin', 'produits'], { queryParams: { action: 'add' } });
    }
    viewProduit(id: number) {
      this.router.navigate(['admin', 'produits'], { queryParams: { id, action: 'view' } });
    }
  }
