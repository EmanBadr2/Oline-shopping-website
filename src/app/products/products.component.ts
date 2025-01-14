import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
constructor(private _ProductsService:ProductsService){}

ngOnInit(): void {
  this.isLoading = true ;
   this._ProductsService.getAllProducts().subscribe( {
    next:(res)=> {
      this.isLoading=false;
       this.productList = res
      } ,
    error:(err)=> { console.log(err) }
   } )
}

// properties
productList :any[] =[];
isLoading:boolean = false ;
searchTerm : string =''

}
