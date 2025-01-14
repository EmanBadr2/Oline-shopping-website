import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
constructor(private _ProductsService:ProductsService){}

ngOnInit(): void {
  this.isLoading = true ;
   this._ProductsService.getProductCategories().subscribe({
    next:(res)=> {
      this.isLoading=false;
       this.allCategories = res
      } ,
    error:(err)=> { console.log(err) }
   } )

   this.getSpecificCategory('electronics')

}

// properties
allCategories :any[] =[];
specificCategory :any[] =[];
isLoading:boolean = false ;

getSpecificCategory(cate:string){
  this._ProductsService.getSpecificCategory(cate).subscribe({
    next:(res)=> {
       this.specificCategory = res
      } ,
    error:(err)=> { console.log(err) }
   } )
}

}


