import {Component,OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/user/profile/auth.service';
import { IProduct } from '../shared';
import { ProductService } from '../shared/product-service';


@Component({
    templateUrl: './product-details.component.html',
})

export class ProductDetailsComponent implements OnInit{

    product:IProduct
    sibling:IProduct[]
    constructor (private productservice:ProductService, private route:ActivatedRoute, public auth:AuthService){

    }
    
    ngOnInit(): void {
        this.product=this.productservice.getProductByID(+this.route.snapshot.params['id'])
        this.sibling=this.productservice.getProductSiblings(this.product.art)
    }



}