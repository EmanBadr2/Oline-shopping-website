import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( productList :any[]  , searchTerm :string) : any[] {
    return productList.filter( (product)=> 
       product.title.toLocaleLowerCase().includes(`${searchTerm.toLocaleLowerCase()}`) ||
       product.category.toLocaleLowerCase().includes(`${searchTerm.toLocaleLowerCase()}`)
   );
  }

}
