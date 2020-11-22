import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, ProductService } from 'src/app/show-room/shared';

@Component({
    templateUrl: './create-product.component.html',
    styles: [` em {float:right; color:#E05C65;}`]
})


export class CreateProductComponent implements OnInit{
    productForm: FormGroup;
    // id:FormControl
    art: FormControl
    genderType: FormControl
    type: FormControl
    price: FormControl
    photo: FormControl
    leftPieces: FormControl
    manufacturer: FormControl
    availableSizesEU: FormControl


    constructor(private route:Router,private productService:ProductService){}

    ngOnInit(): void {
        //  this.id=new FormControl()
         this.art=new FormControl('',Validators.required)
         this.genderType=new FormControl('',Validators.required)
         this.type=new FormControl('',Validators.required)
         this.price=new FormControl('',Validators.required)
         this.photo=new FormControl('',Validators.required)
         this.leftPieces=new FormControl('',Validators.required)
         this.manufacturer=new FormControl('',Validators.required)
         this.availableSizesEU=new FormControl('',Validators.required)

        this.productForm=new FormGroup({
            // id:this.id,
            art:this.art,
            genderType:this.genderType,
            type:this.type,
            price:this.price,
            photo:this.photo,
            leftPieces:this.leftPieces,
            manufacturer:this.manufacturer,
            availableSizesEU:this.availableSizesEU
        })
        
    }

    saveProfile(formsValue){
        console.log(formsValue)
        formsValue.id=1034
        this.productService.addProduct(formsValue)
        this.route.navigate(['/'])
    }

}