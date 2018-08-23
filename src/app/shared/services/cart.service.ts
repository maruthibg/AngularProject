import { Injectable } from "@angular/core";
import { CartItem } from "../../shopping/cart.model";

@Injectable()
export class CartService {
    private cartData:CartItem[] = []
    constructor() {
    }

    getCartItems() {
        return this.cartData;
    }

    addCartItem(newitem:CartItem) {
        this.cartData.push(newitem);
    }

    removeCartItem(idx:number){
        this.cartData.splice(idx, 1)
    }
}