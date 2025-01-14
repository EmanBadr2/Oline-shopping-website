import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private  _HttpClient: HttpClient) { }

  isLoading:boolean = false ;
  
  getAllProducts():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products')
  }

  getProductDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/${id}`)
  }

  // categories
  getProductCategories():Observable<any>{
    return this._HttpClient.get( `https://fakestoreapi.com/products/categories`)
  }
  getSpecificCategory(categ:string):Observable<any>{
    return this._HttpClient.get( `https://fakestoreapi.com/products/category/${categ}`)
  }


 




}
