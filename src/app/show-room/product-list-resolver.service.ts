import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { ProductService } from './shared';
import {map} from 'rxjs/operators'

@Injectable()
export class ProductListResolver implements Resolve<any>{
    constructor(private productService:ProductService){}
    resolve() {
        return this.productService.getProducts().pipe(map(products => products))
    }

}