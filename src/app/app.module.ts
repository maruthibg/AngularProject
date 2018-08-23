import { NgModule } from "@angular/core"
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { BrowserModule } from "@angular/platform-browser"
import { LoginModule } from "./login/login.module";
import { ShoppingModule } from "./shopping/shopping.module";
import { HomeComponent, NotFoundComponent, ListComponent } from "./menulinks.components";
import { RouterModule } from "@angular/router"
import { HttpClientModule } from "@angular/common/http"
import { ProductsComponent } from "./shopping/products.component";

let appRoutes = [
    {path:"", component: HomeComponent},
    {path:"list", component: ListComponent, children :[
        {path:"", component:ProductsComponent},
        {path:":ctgid", component:ProductsComponent},
    ]},
    {path:"**", component: NotFoundComponent},
]

@NgModule({
    // Register components
    declarations: [AppComponent, HeaderComponent, HomeComponent, ListComponent, NotFoundComponent],
    // Module dependencies
    imports : [BrowserModule, LoginModule, ShoppingModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    // Startup component
    bootstrap : [AppComponent]
})
export class AppModule {
    constructor() {
        console.log("App Module constructor ....")
    }
}