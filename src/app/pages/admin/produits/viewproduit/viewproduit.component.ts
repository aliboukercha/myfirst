import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsRessourceService } from 'src/app/services/products/products-ressource.service';
import { Produit } from '../../../../model/Produit';

@Component({
  selector: 'nab-viewproduct',
  templateUrl: './viewproduit.component.html',
  styleUrls: ['./viewproduit.component.scss'],
})
export class ViewproduitComponent implements OnInit {
  @Input()
  produit: Produit;
  @Output()
  produitDeletedEvent = new EventEmitter();

  constructor(
    private productsRessourceService: ProductsRessourceService,
    private router: Router
  ) {}

  ngOnInit() {}
  deleteProduct() {
    this.productsRessourceService
      .deleteProduct(this.produit.id)
      .subscribe((produit) => {
        this.produitDeletedEvent.emit();
        this.router.navigate(['admin', 'produits']);
      });
  }
  editProduct() {
    this.router.navigate(['admin', 'produits'], {
      queryParams: { action: 'edit', id: this.produit.id },
    });
  }
}
