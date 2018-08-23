import { Component } from "@angular/core"

@Component({
    // Specify the tag name for the component
    selector: "app-root",
    // Provide Display output for the component\
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    constructor() {
        console.log("App component constructor")
    }
}