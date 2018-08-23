import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart.model';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styles: []
})
export class CartitemsComponent implements OnInit {
  cartItems:  CartItem[] = []
  constructor(private cs:CartService) { }

  ngOnInit() {
    this.cartItems = this.cs.getCartItems()
  }

  totalAmount() {
    let tot = 0;
    for(let e of this.cartItems) {
      tot += (e.price * e.qty)
    }
    return tot;
  }

  delete(idx:number){
    this.cs.removeCartItem(idx)
  }

}
