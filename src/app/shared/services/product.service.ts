import { Injectable } from "@angular/core";
import { Product } from "../../models/product.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductService {
    private productsData:Product[] = []
    constructor(private http:HttpClient) { }
    restUrl = "http://localhost:3000/wsproducts"
    getProducts() {
        return this.http.get<Product[]>(this.restUrl)
    }
}