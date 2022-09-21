import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public product = { id: 0, name: '', price: 0};

  constructor ( private productsService: ProductsService,
                private router: Router,
                private activatedRoute: ActivatedRoute
              )
  { 
    this.activatedRoute.params.subscribe(
      (params) => {
        if(params['id']){
          this.productsService.findProductById(params['id']).subscribe(
            (data) => {
              console.log(data);
              this.product = data.Product;
            }
          );
        }
      }
    );
  }

  ngOnInit(): void {
  }

  addProduct(){
    this.productsService.addProduct(this.product).subscribe(
      (data) => {
        data['price'] = parseFloat(data['price']);
        console.log(data);
        this.router.navigate(['home']);
      }
    );
  }

  goBack(){
    this.router.navigate(['home']);
  }

}
