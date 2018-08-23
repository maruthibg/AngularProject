import { Component } from "@angular/core"

@Component({
    // Specify the tag name for the component
    selector: "app-header",
    // Provide Display output for the component\
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    appTitle:string;
    userName = "Guest"
    constructor() {
        this.appTitle = "My Shopping App"
        console.log("Header component constructor")
    }
    showUserName():string {
        return this.userName
    }
}