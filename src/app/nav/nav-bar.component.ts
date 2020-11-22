import { from } from 'rxjs';
import {Component} from '@angular/core'
import { templateJitUrl } from '@angular/compiler';
import { AuthService } from '../user/profile/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
              nav {
              background: linear-gradient(#0F1626 70%,#3e4095);
              border-radius: 50% 50% 5% 5%;
              border-bottom-style: solid;
              border-bottom-color: #C5832B
              }`]
})

export class NavBarComponent{
    constructor(public auth:AuthService){}
}