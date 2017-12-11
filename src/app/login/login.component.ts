import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login: any;
  title = 'login';
  public constructor(private location: Location, private http: Http, private router: Router) {
    this.login = {
        'Username': '',
        'password': '',
    };

}
public logins() {
  if(this.login.Username && this.login.password){
       console.log('submit Post click happend' + this.login);
     this.http.post('http://localhost:8080/login', JSON.stringify(this.login))
     .subscribe(result => {

      console.log('submit Post click happend ' +  JSON.stringify(this.login) );
      this.router.navigate(['/home']);
      });
    
  

    }
}
}