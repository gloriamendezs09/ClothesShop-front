import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any;

  constructor ( private productsService: ProductsService,
               private router: Router,
              ) { }

  ngOnInit(): void {
    this.showProducts();
  }

  addProduct(){
    this.router.navigate(['home/form']);
  }

  deleteProduct(id: number){
    this.productsService.deleteProduct(id).subscribe(
      (data) => {
        console.log(data);
      }
    );
    this.showProducts();
  }

  modifyProduct(id: number){
    this.router.navigate(['home/form', id]);
  }

  showProducts(){
    this.productsService.showProducts().subscribe(
      (data) => {
        this.products = data.Products;
      }
    );
  }

  findProductById(){
    this.router.navigate(['home/form']);
  }

}
