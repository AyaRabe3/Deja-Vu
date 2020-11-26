import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import {  AuthenticationService } from 'src/app/authentication.service';
import {TokenInterceptorService }from 'src/app/token-interceptor.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
        
 constructor(
  private toastr: ToastrService,
  private http: HttpClient ,
  private authenticationService: AuthenticationService,
  private token:TokenInterceptorService,
  private router: Router,

  ) {}

  ngOnInit(): void {
  }
 
  SendMsg(f) {

    console.log ("object contact form",f)

    let formObject = {
      userame:f.Name,
      email:f.Email,
      subject:f.Subject,
      message:f.msg
    }

      this.authenticationService.sendmsg(formObject)
      .subscribe(
        (result)=>{
          console.log('success',result)
          this.toastr.success( 'Your message was sent successfully',`Hello ${f.Name}!`);
        },
        (error)=>{
          console.log('error',error)
          this.toastr.error("you should login first")
          this.router.navigate(["/LogIn"]);
        } 
         )
      } 

}
