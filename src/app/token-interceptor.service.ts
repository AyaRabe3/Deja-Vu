import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req,next){
    let authService=this.injector.get(AuthenticationService)
    let tokeiezedReq=req.clone({
      setHeaders:{
        Authorization:`${authService.getToken()}`
      }
    })
    return next.handle(tokeiezedReq)
  }
}
