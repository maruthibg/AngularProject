import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../shared/services/product.service';
import { CartService } from '../shared/services/cart.service';
import { CartItem } from './cart.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  products:Product[] = []
  constructor(private ps:ProductService, private csvc:CartService) { }

  ngOnInit() {
    this.products = this.ps.getProducts()
  }

  addToCart(selectedproduct:Product){
    let newitem = new CartItem(selectedproduct.id, selectedproduct.name, selectedproduct.price, 1)
    this.csvc.addCartItem(newitem)
  }

}
