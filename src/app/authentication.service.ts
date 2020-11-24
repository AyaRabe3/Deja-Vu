import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  isUSer = new BehaviorSubject(false);
  currentUserStatus = this.isUSer.asObservable();

  constructor(private http: HttpClient) {}
  updateUserStatus() {
    this.isUSer.next(true)
    console.log(this.isUSer)
  }
 
  
  // https://devavu-79076.firebaseio.com/api
  login(username: string, password: string) {
    this.http.post<any>(`https://devavu-79076.firebaseio.com/login.json`, { username, password }).subscribe(
      (result) => {
        console.log(result)
      }
    )
  }

}