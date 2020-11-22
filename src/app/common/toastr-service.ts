import { Injectable } from '@angular/core';

declare let toastr:any

@Injectable()
export class ToastrService{
    success(message:string, title?:string){
        toastr.options = {
            "debug": false,
            "positionClass": "toast-bottom-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 2000,
            "timeOut": 2000,
            "extendedTimeOut": 1000
          };
        toastr.success(message,title)
    }
    info(message:string, title?:string){
        toastr.options = {
            "debug": false,
            "positionClass": "toast-bottom-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 2000,
            "timeOut": 2000,
            "extendedTimeOut": 1000
          };
        toastr.info(message,title)
    }
    warning(message:string, title?:string){
        toastr.options = {
            "debug": false,
            "positionClass": "toast-bottom-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 2000,
            "timeOut": 2000,
            "extendedTimeOut": 1000
          };
        toastr.warning(message,title)
    }
    error(message:string, title?:string){
        toastr.options = {
            "debug": false,
            "positionClass": "toast-bottom-right",
            "onclick": null,
            "fadeIn": 300,
            "fadeOut": 2000,
            "timeOut": 2000,
            "extendedTimeOut": 1000
          };
        toastr.error(message,title)
    }



}