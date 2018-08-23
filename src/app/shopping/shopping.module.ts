import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { ManageComponent } from './manage.component';
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms";
import { CategoriesComponent } from './categories.component'

@NgModule({  
    declarations: [ProductsComponent, CartitemsComponent, ManageComponent, CategoriesComponent],
    exports: [ProductsComponent, CartitemsComponent],
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path:"manage", component: ManageComponent},
            {path:"categories", component: CategoriesComponent}
        ])
        ]
        }
    )
export class ShoppingModule {
    constructor() {
        console.log("Shopping Module constructor ....")
    }
}