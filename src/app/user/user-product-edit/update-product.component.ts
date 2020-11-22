import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { IProduct, ProductService } from 'src/app/show-room/shared';

@Component({
    templateUrl: './update-product.component.html'
})

export class UpdateProductComponent implements OnInit{

    product:IProduct

    constructor(private productService:ProductService, private actRoute:ActivatedRoute){}

    ngOnInit(): void {
        this.product=this.productService.getProductByID(+this.actRoute.snapshot.params['id'])
    }

    saveProfile(){}

    

}