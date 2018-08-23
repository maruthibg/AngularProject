import { NgModule } from "@angular/core";
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.components";
import { RouterModule } from "@angular/router"
import { SharedModule } from "../shared/shared.module"

@NgModule({
     // Register components
     declarations: [SignInComponent, SignUpComponent],
     imports: [
         SharedModule,
         RouterModule.forChild([
             {"path":"signin", component: SignInComponent},
             {"path":"signup", component: SignUpComponent},
             ]
            )
        ]
})
export class LoginModule {
    constructor() {
        console.log("Login Module constructor ....")
    }
}
