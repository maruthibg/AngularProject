import { Component } from "@angular/core"
import { Category } from "test/AngularProject/src/app/models/category.model";
import { CategoryService } from "./shared/services/category.service";

@Component({
    // Provide Display output for the component\
    template: `Welcome to home page`
})
export class HomeComponent {
    constructor() {
        console.log("Home component constructor")
    }
}

@Component({
    // Provide Display output for the component\
    template: `<div class="row">
    <div class="col-sm-2 card">
        <div class="card-header bg-primary"><b>Categories</b></div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item" *ngFor="let link of ctgLinks">
                    <a [routerLink]="link.id"> {{ link.name }}</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-sm-5">
        <!-- app-products></app-products -->
        <router-outlet></router-outlet>
    </div>
    <div class="col-sm-5 card card-body">
        <app-cartitems></app-cartitems>
    </div>
    </div>
    `
})
export class ListComponent {
    ctgLinks:Category[] = []
    constructor(private csvc:CategoryService) {
        console.log("List component constructor")
    }

    ngOnInit(){
        this.csvc.getCategories().subscribe(data => this.ctgLinks=data, err => console.log("Error"))
    }
}

@Component({
    // Provide Display output for the component\
    template: `Resource not found`
})
export class NotFoundComponent {
    constructor() {
        console.log("Not Found component constructor")
    }
}