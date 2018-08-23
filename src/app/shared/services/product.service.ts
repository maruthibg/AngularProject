import { Injectable } from "@angular/core";
import { Product } from "../../models/product.model";

@Injectable()
export class ProductService {
    private productsData:Product[] = []
    constructor() {
        this.productsData = []
    }

    getProducts() {
        return this.productsData;
    }
}