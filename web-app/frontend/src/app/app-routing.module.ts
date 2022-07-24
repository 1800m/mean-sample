import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductDetailComponent } from './product/product-detail/product-detail.component';
// import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  // {path: '', component: ProductListComponent},
  // {path: 'detail', component: ProductDetailComponent},
];

// import
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
