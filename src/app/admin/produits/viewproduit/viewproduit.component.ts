import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Produit } from '../../../model/Produit';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../../../service/http-client.service';

@Component({
  selector: 'app-viewproduit',
  templateUrl: './viewproduit.component.html',
  styleUrls: ['./viewproduit.component.css']
})
export class ViewproduitComponent implements OnInit {


  @Input()
  produit: Produit;
  @Output()
  produitDeletedEvent = new EventEmitter();
  
  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(){
  }
  deleteProduit() {
    this.httpClientService.deleteProduit(this.produit.id).subscribe(
      (produit) => {
        this.produitDeletedEvent.emit();
        this.router.navigate(['admin', 'produits']);
      }
    );
  }
  editProduit() {
    this.router.navigate(['admin', 'produits'], { queryParams: { action: 'edit', id: this.produit.id } });
  }

}
