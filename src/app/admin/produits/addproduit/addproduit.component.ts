
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Produit } from '../../../model/Produit';
import { HttpClientService } from '../../../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  
  
  
  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }



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

      this.httpClient.post('http://localhost:8080/produits/upload', uploadData, { observe: 'response' })
        .subscribe((response) => {
          if (response.status === 200) {
            this.httpClientService.addProduit(this.produit).subscribe(
              (produit) => {
                this.produitAddedEvent.emit();
                this.router.navigate(['admin', 'produits']);
              }
            );
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
        );
    } else {
      this.httpClientService.updateProduit(this.produit).subscribe(
        (produit) => {
          this.produitAddedEvent.emit();
          this.router.navigate(['admin', 'produitks']);
        }
      );
    }

  }

}




