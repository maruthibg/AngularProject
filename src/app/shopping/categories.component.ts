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

}
