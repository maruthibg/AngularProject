import { Injectable } from "@angular/core"
import { Category } from "../../models/category.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CategoryService {
    private categoryData:Category[] = []
    restUrl = "http://localhost:3000/wscategories"
    constructor(private http:HttpClient) {}
    getCategories() {
        return this.http.get<Category[]>(this.restUrl)
    }
}