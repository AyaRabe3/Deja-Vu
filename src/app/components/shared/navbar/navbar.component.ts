import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isUser:boolean
  constructor(private appService:AuthenticationService) { }

  ngOnInit(): void {
    this.appService.currentUserStatus.subscribe(data=>this.isUser=data)
    console.log('navbar ts',this.isUser)
  }

}
