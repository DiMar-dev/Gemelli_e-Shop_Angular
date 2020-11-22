import { style } from '@angular/animations';
import {Component} from '@angular/core'
import { AuthService } from './auth.service';

@Component({
    templateUrl: './profile.component.html'
})

export class ProfileComponent{

    password
    email
    constructor(public authService:AuthService){

    }
    login(formValues){
        this.authService.loginUser(formValues.userName,formValues.password)
    }
}