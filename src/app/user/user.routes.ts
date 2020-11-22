import {ProfileComponent} from './profile/profile.component'
import { Routes } from '@angular/router';
import { CreateProductComponent } from './user-product-edit/create-product.component';
import { UpdateProductComponent } from './user-product-edit/update-product.component';


export const userRoutes =[
    {path: 'profileLogin', component: ProfileComponent},
    {path: 'edit-product/:id', component: UpdateProductComponent},
    {path: 'create-product', component: CreateProductComponent}

]