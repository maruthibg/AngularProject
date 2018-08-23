import { Component } from "@angular/core"

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
    <div class="col-sm-7">
        <app-products></app-products>
    </div>
    <div class="col-sm-5 card card-body">
        <app-cartitems></app-cartitems>
    </div>
    </div>
    `
})
export class ListComponent {
    constructor() {
        console.log("List component constructor")
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