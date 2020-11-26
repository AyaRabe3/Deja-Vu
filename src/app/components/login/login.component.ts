import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from 'src/app/authentication.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    // submitted = false;
    returnUrl: string;
    loginData:{}
    constructor(
        // private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private http: HttpClient,
        private toastr: ToastrService) {}

    ngOnInit() {

    }

    // onSubmit(obj) {

    //   console.log ("object",obj)
    //     this.authenticationService.updateUserStatus()

    //   let formObject = {
    //     username:obj.value.username,
    //     password:obj.value.password
    //   }
    //   // https://devavu-79076.firebaseio.com/login.json
    //      console.log(JSON.stringify(formObject))
    //     this.http.post<any>("http://localhost:4402/user/login/",JSON.stringify(formObject)).subscribe(
    //       (result)=>{
    //         console.log('success',result)
    //         this.toastr.success( 'You logged in successfully',`Hello ${obj.value.username}!`);
    //         this.router.navigate(["/"]);
    //       },
    //       (error)=>{
    //         console.log('error')
    //         // alert("wrong email or password")
    //         this.toastr.warning("wrong email or password")
    //         }       
    //        )
    //     }
  
    
    onSubmit(loginData) {
      console.log ("object",loginData)
        // this.authenticationService.updateUserStatus()
        let userLoginDtata={
          email:loginData.value.username,
          password:loginData.value.password
        }
        this.authenticationService.login(userLoginDtata).subscribe(
          (result)=>{
            console.log('success',result)
            localStorage.setItem("token",result.token)
            localStorage.setItem("user",result.user.username)
            let user=localStorage.getItem('user')
            this.toastr.success( 'You logged in successfully',`Hello ${user}!`);
            this.router.navigate(["/"]);
          },
          (error)=>{
            console.log(loginData.value)
            console.log('error',error)
            // alert("wrong email or password")
            this.toastr.warning("wrong email or password")
            }       
           )
        }




}  
