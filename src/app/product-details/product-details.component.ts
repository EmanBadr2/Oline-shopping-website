import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute){}

ngOnInit(): void {
  this.isLoading = true ;
this._ActivatedRoute.paramMap.subscribe( (params)=>{this.productID = params.get('id') } )
this._ProductsService.getProductDetails(this.productID).subscribe( {
  next:(res:any)=> {
    this.isLoading = false ;
     this.everyProdductDetails = res
    } ,
  error:(err)=> { console.log(err) }
 } )

}

// properties
productID:any='' ;
everyProdductDetails:any ;
isLoading:boolean = false ;




}
