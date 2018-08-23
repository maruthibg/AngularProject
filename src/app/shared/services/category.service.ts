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
    addCategory(newcategory:Category) {
        return this.http.post<Category>(this.restUrl, newcategory)
    }
    deleteCategory(id:number){
        return this.http.delete(this.restUrl+"/"+id)
    }
    updateCategory(modifiedCategory:Category) {
        return this.http.put<Category>(this.restUrl+"/"+modifiedCategory.id, modifiedCategory)
    }
}