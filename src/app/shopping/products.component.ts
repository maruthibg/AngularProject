import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../shared/services/product.service';
import { CartService } from '../shared/services/cart.service';
import { CartItem } from './cart.model';
import {ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {
  products:Product[] = []
  constructor(private ps:ProductService, private csvc:CartService, private ar:ActivatedRoute) { }

  ngOnInit() {
    //this.products = this.ps.getProducts()
    // this.ps.getProducts().subscribe(data => this.products=data, err => console.log("Error ", err))
    this.ar.params.subscribe(
      (params) => {
        let paramId = params.ctgid;
        this.ps.getProducts().subscribe(
          (data) => {
            if(paramId == undefined) {
              this.products = data;
            }else {
              console.log("Else")
              console.log(data)
              this.products = data.filter(e => e.ctgid == paramId)
            }
          }
        )
      }
    )
  }

  addToCart(selectedproduct:Product){
    let newitem = new CartItem(selectedproduct.id, selectedproduct.name, selectedproduct.price, 1)
    this.csvc.addCartItem(newitem)
  }

}
