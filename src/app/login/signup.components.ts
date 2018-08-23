import { Component } from "@angular/core"

@Component({
    selector: "sign-up",
    template: `<my-sign [title]="signUpHeading"></my-sign>`
})
export class SignUpComponent {
    signUpHeading = "Sign Up"
    constructor() {
        console.log("SignUp component constructor")
    }
}