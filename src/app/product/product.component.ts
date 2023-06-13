import { Component, Input } from '@angular/core';
import { Product } from '../grocery-inteface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() ngStyle : {class:string};
products : Product[] = [
  {
    name: 'Snickers',
    price: 5,
    productId: '53yh',
    weight: 2,
    salePrice:0
  }, {
    name: 'Oreos',
    price: 0,
    productId: '6g6',
    weight: 4,
    salePrice:4.5
  },
  {
    name: 'Gatorade',
    price: 6,
    productId: 'yh67',
    weight: 3,
    salePrice:0
  },
  {
    name: 'Battery',
    price: 0,
    productId: 'dh67',
    weight: 4,
    salePrice:5
  }
]

newProduct : Product = {
  name: '',
  price: 1.3,
  productId: '',
  weight: 2,
  salePrice:1
}
addProduct(){
  this.products.push(this.newProduct);

}

}
