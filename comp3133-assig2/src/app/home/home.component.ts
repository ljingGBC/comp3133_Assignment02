
import { Component, OnInit } from '@angular/core';

import{ NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  username!: string
  password!: string


  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm:NgForm) {
    console.log(loginForm.value);

    this.username = loginForm.value.username
    this.password = loginForm.value.password

    this.authService.login(this.username, this.password)
    .subscribe( data => {
      console.log("Is Login Success: " + data);
      if(data){
         this.router.navigate(['/home']);
      }else{
       alert("Invalid username or password")
     }
    });
  }
}



