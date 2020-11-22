import { style } from '@angular/animations'
import {Component, Input} from '@angular/core'
import { AuthService } from '../user/profile/auth.service'
import { IProduct } from './shared/product-model'

@Component({
    selector: 'product-thumbnail',
    template: `
    <div [routerLink]="['/product',listProduct.id]">
            <img [src]="listProduct.photo" width="100%">
            <div class="toast-bottom-left" >
                <span>Art.: {{listProduct.art}}</span>
                <span class="pl-3 text-danger" *ngIf="listProduct.leftPieces===0">SOLD</span>
                <span class="float-right">Price: {{listProduct.price | currency: 'EUR'}} </span>
            </div>
    <div>`
})

export class ProductThumbnailComponent{

    constructor (public auth:AuthService){}

    @Input() listProduct:IProduct

}