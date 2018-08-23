import { Injectable } from "@angular/core"
import { Category } from "../../models/category.model";

@Injectable()
export class CategoryService {
    categoryData:Category[] = []
    constructor() {
        
    }
}