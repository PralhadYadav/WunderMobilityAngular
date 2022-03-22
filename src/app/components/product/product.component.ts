import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { ToastrService } from 'ngx-toastr';

import { products } from '../../constants/mock-response'

/**
 * @description - ProductComponent is first component get rendered after AppComponent & use to display product list on the page.
 */
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  /**
 * @description - products variable holds value of static list of products.
 */
  products: any
  constructor(private router: Router, private toastrService: ToastrService) { }

  /**
 * @description - ngOnInit lifecycle method of Angular which used to initialize variable value.
 */
  ngOnInit(): void {
    this.products = products;
  }

  /**
* @description - addToCart method use to add product to cart.
*/
  addToCart(product: any) {
    let cartArray = [];
    let storageData = localStorage.getItem('ProductsArray');
    if (storageData) {
      cartArray = JSON.parse(storageData);
      cartArray.push(product);
      localStorage.setItem("ProductsArray", JSON.stringify(cartArray))
    } else {
      cartArray.push(product)
      localStorage.setItem("ProductsArray", JSON.stringify(cartArray))
    }
    this.toastrService.success('Product added to cart');
  }

  /**
* @description - buyProduct method use to add product to cart and navigate user to cart page.
*/
  buyProduct(product: any) {
    let cartArray = [];
    let storageData = localStorage.getItem('ProductsArray');
    if (storageData) {
      cartArray = JSON.parse(storageData);
      cartArray.push(product);
      localStorage.setItem("ProductsArray", JSON.stringify(cartArray))
      this.router.navigate(['/cart'])
    } else {
      cartArray.push(product)
      localStorage.setItem("ProductsArray", JSON.stringify(cartArray))
      this.router.navigate(['/cart'])
    }
  }
}
