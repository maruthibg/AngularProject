import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {

  constructor(private ctgsvc:CategoryService) { }

  ngOnInit() {
    this.ctgsvc.getCategories().subscribe(
      (data) => {
        console.log("Get Success", data)
      }, (err) => {
        console.log("Get Error", err)
      }
    )
  }

}
