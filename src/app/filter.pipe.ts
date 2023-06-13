import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './grocery-inteface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[]) {
  return  products.filter(c => c.salePrice ) ;

}
}