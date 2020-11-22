import { Component } from "@angular/core";

@Component({
    template: `<div class="container col-sm-12 m-0 p-0" style="background-image: url('/assets/images/logo/background.jpg');">
                    <div class="container col-sm-8">
                    <button class="btn btn-lg btn-primary col-4 " style=" margin:30% " [routerLink]="['/products']">Show room</button>
                    </div>
                    
            </div>`
})
// <img src="/assets/images/logo/backgroundSop.jpg" width="100%">
export class FrontPageComponent{}