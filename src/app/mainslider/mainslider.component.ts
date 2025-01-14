import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.css']
})
export class MainsliderComponent implements OnInit{
constructor(private _ProductsService:ProductsService){}

ngOnInit(): void {
  this._ProductsService.isLoading=true;
   this._ProductsService.getAllProducts().subscribe( {
    next:(res)=> {
       this._ProductsService.isLoading=false;
       this.productList = res
      } ,
    error:(err)=> { console.log(err) }
   } )
}

// properties
productList :any[] =[];









  
// OWL Carousel
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 3
    },
    400: {
        items: 4
      },
      600: {
        items: 6
      },
      740: {
        items: 10
      }
  },
  nav: true
}




}
