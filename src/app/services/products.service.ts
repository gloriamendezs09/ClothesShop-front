import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productAdd = 'http://localhost:8080/add';
  private productDelete = 'http://localhost:8080/delete';
  private productShow = 'http://localhost:8080/show';
  private productFindById = 'http://localhost:8080/find'; 

  constructor(private http: HttpClient) {
  }

  addProduct(product:any): Observable<any>{
    return this.http.post(this.productAdd, product);
  } 
  
  deleteProduct(id: number): Observable<any>{
    return this.http.post(this.productDelete, id);
  }

  showProducts(): Observable<any>{
    return this.http.get(this.productShow);
  }

  findProductById(id: number): Observable<any>{
    return this.http.get(this.productFindById + '/' + id);
  }
}
