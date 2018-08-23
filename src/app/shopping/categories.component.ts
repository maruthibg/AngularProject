import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {
  categories:Category[] = []
  frmCategory:Category = new Category(null, null);

  constructor(private ctgsvc:CategoryService) { }

  ngOnInit() {
    this.ctgsvc.getCategories().subscribe(
      (data) => {
        console.log("Get Success", data)
        this.categories = data
      }, (err) => {
        console.log("Get Error", err)
      }
    )
  }

  add(){
    this.ctgsvc.addCategory(this.frmCategory).subscribe(
      (data)=>{
        console.log("Add Success")
        this.categories.push(data)
      },
      (err)=>{console.log("Add Error")},
    )
    this.frmCategory = new Category(null, null)
  }

  delete(id:number){
    this.ctgsvc.deleteCategory(id).subscribe(
      (data)=>{
        console.log("Delete Success")
        let idx = this.categories.findIndex((e) => e.id == id)
        this.categories.splice(idx, 1)
      },
      (err)=>{
        console.log("Delete Error")
      }
    )
  }

  edit(category:Category){
    //this.frmCategory= category
    Object.assign(this.frmCategory, category)
  }
  
  update(){
    this.ctgsvc.updateCategory(this.frmCategory).subscribe(
      (data)=>{
        console.log("Update Success")
        let idx = this.categories.findIndex(e => e.id == data.id)
        this.categories[idx] = data
      },
      (err)=>{console.log("Update Error")},
    )
    this.frmCategory = new Category(null, null)
  }

}
