import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styles: []
})
export class ManageComponent implements OnInit {
  mgProducts:Product[] = [];
  constructor(private psvc:ProductService) { }

  ngOnInit() {
    //this.mgProducts = this.psvc.getProducts()
    this.psvc.getProducts().subscribe(data => this.mgProducts=data, err => console.log("Error ", err))
  }

}
