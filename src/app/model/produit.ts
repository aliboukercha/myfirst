// TODO rename to Product
export class Produit {
  id: number;
  name: string;
  author: string;
  price: number;
  picByte: string;
  retrievedImage: string;
  isAdded: boolean;

  constructor(productLike?: Partial<Produit>) {
    productLike = productLike ?? {};
    this.id = productLike.id;
    this.name = productLike.name;
    this.author = productLike.author;
    this.price = productLike.price;
    this.picByte = productLike.picByte;
    this.retrievedImage = productLike.retrievedImage;
    this.isAdded = productLike.isAdded;
  }
}
