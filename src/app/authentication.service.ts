import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  isUSer = new BehaviorSubject(false);
  currentUserStatus = this.isUSer.asObservable();
  private loginUrl="http://localhost:4402/user/login/"
  private contactUrl="http://localhost:4402/user/contact/"
  
  constructor(private http: HttpClient,private router:Router) {}
 
  login(data) {
    return this.http.post<any>(this.loginUrl,data)
  }
  
  sendmsg(data) {
    return this.http.post<any>(this.contactUrl,data)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  loggedin(){
    return !!localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

}