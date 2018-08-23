import { Component } from "@angular/core"

@Component({
    selector: "sign-in",
    template: `
    <h4> Welcome {{userName}} </h4>
    <my-sign [title]="signInHeading" (myEvent)="handleMyEvent($event)"></my-sign>
    `
})
export class SignInComponent {
    userName = "Guest"
    signInHeading = "Sign In"
    constructor() {
        console.log("Signin component constructor")
    }

    handleMyEvent(obj) {
        this.userName = obj.usr
    }
}