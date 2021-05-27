import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { ProductsRessourceService } from 'src/app/services/products/products-ressource.service';
import { Produit } from '../../../../model/Produit';

@Component({
  selector: 'nab-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class AddproduitComponent implements OnInit, OnChanges {
  // TODO rename to AddProductComponent
  @Input()
  product: Produit;
  private selectedFile;

  @ViewChild('image')
  productImageEl: ElementRef<HTMLInputElement>;

  imgURL: any;

  @Output()
  produitAddedEvent = new EventEmitter();

  constructor(
    private productsRessourceService: ProductsRessourceService,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.product && !changes.product.currentValue) {
      this.product = {} as any;
    }
  }

  ngOnInit() {}

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  isAdd() {
    return this.product?.id == null;
  }

  save() {
    if (this.isAdd()) {
      const uploadData = new FormData();
      uploadData.append('imageFile', this.productImageEl.nativeElement.value);

      this.productsRessourceService
        .uploadImage(uploadData)
        .pipe(
          mergeMap(() => this.productsRessourceService.addProduct(this.product))
        )
        .subscribe((produit) => {
          this.produitAddedEvent.emit();
          this.router.navigate(['admin', 'produits']);
        });
    } else {
      this.productsRessourceService
        .updateProduct(this.product)
        .subscribe((produit) => {
          this.produitAddedEvent.emit();
          this.router.navigate(['admin', 'produits']);
        });
    }
  }
}
