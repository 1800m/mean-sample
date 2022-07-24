import { Component, OnInit } from '@angular/core';
// import { products } from 'src/app/products';
import { ProductService } from '../shared/product.service';
// import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  // products: any = [1, 2, 3]
  products: any

  // constructor() { }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.products = products
    // this.products = this.productService.getProducts()

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        // console.log('次のデータが出力: ' + data)
        this.products = data
      },
      (err)  => {console.log('次のエラーが発生: ' + err)},
      ()     => {console.log('完了')},
    )

    // this.products = this.productService.getProducts()

  //   // 観測対象の作成
  //   const observable = new Observable(subscriber => {
  //     subscriber.next(1);
  //     subscriber.next(2);
  //     subscriber.next(3);

  //     setTimeout(() => {
  //       subscriber.next(4);
  //       subscriber.complete();
  //     }, 1000)
  //   })

  //   console.log('before subscribe')
  //   observable.subscribe({
  //     next(data) {console.log('次のデータが出力: ' + data)},
  //     error(err) {console.log('次のエラーが発生: ' + err)},
  //     complete() {console.log('完了')},
  //   })
  //   console.log('after subscribe')
  }
}
