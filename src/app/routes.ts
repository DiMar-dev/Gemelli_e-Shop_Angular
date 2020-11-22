import { Routes } from '@angular/router';
import { FrontPageComponent } from './nav/front-page.component';
import { ProductDetailsComponent } from './show-room/product-details/product-details.component';
import { ProductListResolver } from './show-room/product-list-resolver.service';
import { ProductListComponent } from './show-room/product-list.component';
import {UserModule} from './user/user.module'

export const appRoutes:Routes= [

    {path: 'products', component: ProductListComponent, resolve: {products: ProductListResolver}},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: '', pathMatch: 'full',component: FrontPageComponent},
    {path: 'user', loadChildren: './user/user.module#UserModule'}

]