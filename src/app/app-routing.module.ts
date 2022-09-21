import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductsComponent } from './product/products.component';

const routes: Routes = [
  {path: 'home', component: ProductsComponent},
  {path: 'home/form', component: ProductFormComponent},
  {path: 'home/form/:id', component: ProductFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
