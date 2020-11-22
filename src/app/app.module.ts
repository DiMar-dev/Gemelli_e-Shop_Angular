import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './show-room/product-list.component';
import { ProductThumbnailComponent } from './show-room/product-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { ProductService } from './show-room/shared/product-service';
import { ToastrService } from './common/toastr-service';
import { ProductDetailsComponent } from './show-room/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ProductListResolver } from './show-room/product-list-resolver.service';
import { AuthService } from './user/profile/auth.service';
import { FrontPageComponent } from './nav/front-page.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductThumbnailComponent,
    NavBarComponent,
    ProductDetailsComponent,
    FrontPageComponent
  ],
  providers: [ProductService,
    ToastrService,
    ProductListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
