import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';


/**
 * @description - Routes array has all routes of application for different component.
 */
const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

/**
 * @description -AppRoutingModule defines all routngs of the project.
 * 
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
