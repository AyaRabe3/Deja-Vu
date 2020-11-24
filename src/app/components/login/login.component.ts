import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {  AuthenticationService } from 'src/app/authentication.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    submitted = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private http: HttpClient,
        private toastr: ToastrService) {}

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit(obj) {

      console.log ("object",obj)
        this.authenticationService.updateUserStatus()

      let formObject = {
        username:obj.value.username,
        password:obj.value.password
      }

        this.http.post<any>(`https://devavu-79076.firebaseio.com/login.json`,formObject).subscribe(
          (result)=>{
            console.log('success',result)
            this.toastr.success( 'You logged in successfully',`Hello ${obj.value.username}!`);
            this.router.navigate(["/"]);
          },
          (error)=>{
            console.log('error')
          }       
           )
        }
}  
