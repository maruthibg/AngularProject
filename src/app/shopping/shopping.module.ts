import { NgModule } from "@angular/core";
import { ProductsComponent } from './products.component';
import { CartitemsComponent } from './cartitems.component';
import { ManageComponent } from './manage.component';
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

@NgModule({  
    declarations: [ProductsComponent, CartitemsComponent, ManageComponent],
    exports: [ProductsComponent, CartitemsComponent],
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path:"manage", component: ManageComponent}])
        ]
        }
    )
export class ShoppingModule {
    constructor() {
        console.log("Shopping Module constructor ....")
    }
}