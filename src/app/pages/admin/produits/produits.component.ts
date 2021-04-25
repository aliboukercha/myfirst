import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../model/Produit';
import { UserApiService } from '../../../services/user-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsRessourceService } from 'src/app/services/products/products-ressource.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
})
export class ProduitsComponent implements OnInit {
  produits: Array<Produit>;
  produitsRecieved: Array<Produit>;
  selectedProduit: Produit;
  action: string;

  constructor(
    private productsRessourceService: ProductsRessourceService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.activedRoute.data.subscribe((data) => {
      this.produits = data.products;
    });
    this.activedRoute.queryParams.subscribe((params) => {
      this.action = params['action'];

      const id = params['id'];

      if (id) {
        this.selectedProduit = this.produits.find((produit) => {
          return produit.id === +id;
        });
      }
    });
  }

  addProduit() {
    this.selectedProduit = new Produit();
    this.router.navigate(['admin', 'produits'], {
      queryParams: { action: 'add' },
    });
  }
  viewProduit(id: number) {
    this.router.navigate(['admin', 'produits'], {
      queryParams: { id, action: 'view' },
    });
  }
}
