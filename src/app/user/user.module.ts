import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { RouterModule } from '@angular/router';
import {userRoutes} from './user.routes'
import { ProfileComponent } from './profile/profile.component';
import { CreateProductComponent } from './user-product-edit/create-product.component';
import { CreateProfileComponent } from './profile/profile-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UpdateProductComponent} from './user-product-edit/update-product.component'

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        CreateProductComponent,
        CreateProfileComponent,
        UpdateProductComponent
    ],
    providers: []

})

export class UserModule{

}