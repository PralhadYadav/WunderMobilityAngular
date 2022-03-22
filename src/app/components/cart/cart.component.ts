import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../services/product.service';

/**
* @description - CartComponent display all cart product list and final amount to be paid after promo codes applied.
*/
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartProducts: any = [];
  totalCartPrice: number = 0;
  finalCartDetails: any = {}
  constructor(private productService: ProductService, private toastrService: ToastrService) { }


  /**
 * @description - ngOnInit lifecycle method of Angular, use to service call and data massaging.
 */
  ngOnInit(): void {
    this.getCartData();
    this.productService.getCartPrice(this.cartProducts).subscribe(res => {
      if (res.status == 200 && res.data) {
        this.finalCartDetails = res.data[0];
      } else {
        this.toastrService.error('Something went wrong');
      }
    })
  }

  /**
* @description - getCartData method use to remove duplicate products and calculate initial cart price.
*/
  getCartData() {
    let storageData = localStorage.getItem('ProductsArray');
    if (storageData) {
      let data = JSON.parse(storageData)
      for (let product of data) {
        let dataInCart = this.cartProducts.filter((x: { name: string; }) => x.name === product.name);
        if (dataInCart.length > 0) {
          dataInCart[0].count += 1;
        } else {
          product.count = 1;
          this.cartProducts.push(product);
        }
      }
    }
    this.totalCartPrice = this.cartProducts.reduce((a: number, b: { price: number; count: number; }) => a + (b.price * b.count), 0)
  }

  ngOnDestroy() {
    this.cartProducts = [];
    this.totalCartPrice = 0;
    this.finalCartDetails= {}
  }

}
