import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';

// routing moduleと分ける方がよい
const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':productId', component: ProductDetailComponent },
    ]
  }
];


@NgModule({
    declarations: [
        ProductDetailComponent,
        ProductListComponent,
        ProductComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule, // Angular特有の便利なモジュール。上位はBrowserModule。
    ],
    providers: [
      ProductService
    ],
    bootstrap: []
})
export class ProductModule { }
