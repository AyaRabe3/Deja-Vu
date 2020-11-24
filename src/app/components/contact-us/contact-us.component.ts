import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
        
 constructor(private toastr: ToastrService,private http: HttpClient ) {}

  ngOnInit(): void {
  }
 
  SendMsg(f) {

    console.log ("object contact form",f)

    let formObject = {
      Name:f.Name,
      Email:f.Email,
      Subject:f.Subject,
      msg:f.msg
    }

      this.http.post<any>(`https://devavu-79076.firebaseio.com/contactus.json`,formObject).subscribe(
        (result)=>{
          console.log('success',result)
          this.toastr.success( 'Your message was sent successfully',`Hello ${f.Name}!`);
        },
        (error)=>{
          console.log('error')
        }       
         )
      } 
}
