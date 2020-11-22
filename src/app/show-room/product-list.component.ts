import {Component,OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr-service';
import { IProduct } from './shared';
import { ProductService } from './shared/product-service';

@Component({
    template: `
    <div class="container">
        <h1>Gemelli online showroom</h1>
        <hr/>
        <div class="row">
            <div class="col-md-4 p-3" *ngFor="let item of listProductService">
                <product-thumbnail (mouseenter)="handleMouseEnter(item.availableSizesEU,item.leftPieces,item.art)" [listProduct]="item" ></product-thumbnail>
            </div>
        </div>
    </div>`,
    styles: [` div.container {color: wheat;}`]
})

export class ProductListComponent implements OnInit {
    listProductService:IProduct
    constructor(private productService: ProductService,private toastr:ToastrService
        ,private route:ActivatedRoute){
        
    }

    ngOnInit(){
        this.listProductService=this.route.snapshot.data['products']
    }

    handleMouseEnter(sizesAv:number[],numPices,artPom){

        let rezTitle:String
        rezTitle="Art. no."+ artPom+" available numbers:"

        let rezName:String
        rezName=""
        sizesAv.forEach(num => rezName= rezName.concat(num.toString().valueOf()).concat(" | "))


        if(numPices!=0)
        this.toastr.success(rezName.valueOf(),rezTitle.valueOf())
    }

   
}