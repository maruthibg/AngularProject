import { NgModule } from "@angular/core"
import { MySignComponent } from "./mysign.component";
import { ProductService } from "./services/product.service";
import { CartService } from "./services/cart.service";
import { CategoryService } from "./services/category.service";


@NgModule({
    // Register components
    declarations: [MySignComponent],
    exports: [MySignComponent],
    providers:[ProductService, CartService, CategoryService]
})
export class SharedModule {
    constructor() {
        console.log("Shared Module constructor ....")
    }
}