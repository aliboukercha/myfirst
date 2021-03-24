import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { ProductsRessourceService } from 'src/app/services/products/products-ressource.service';
import { Produit } from '../../../model/Produit';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {

  
  @Input()
  produit: Produit;
  private selectedFile;
  imgURL: any;

  @Output()
  produitAddedEvent = new EventEmitter();
  
  constructor(private productsRessourceService : ProductsRessourceService,
    private router: Router) { }

  ngOnInit(){
  }
  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }
  saveProduit() {
    //If there is no book id then it is an add book call else it is an edit book call
    if (this.produit.id == null) {

      const uploadData = new FormData();
      uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
      this.selectedFile.imageName = this.selectedFile.name;

      this.productsRessourceService.uploadImage(uploadData)
       .pipe(mergeMap(response => this.productsRessourceService.addProduct(this.produit)))
      .subscribe(
        (produit) => {
          this.produitAddedEvent.emit();
          this.router.navigate(['admin', 'produits']);
        }
      );

    } else {
      this.productsRessourceService.updateProduct(this.produit).subscribe(
        (produit) => {
          this.produitAddedEvent.emit();
          this.router.navigate(['admin', 'produits']);
        }
      );
    }

  }

}


