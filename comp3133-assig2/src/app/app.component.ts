import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comp3133-assig2';

  isUserLoggedIn: boolean = false

  constructor(private authService:AuthService ) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authService.isValid()
    console.log("User Logged in", this.isUserLoggedIn)
  }

  //Will call after logout pressed
  logoutStatusChanged(){
    this.isUserLoggedIn = false
    console.log(`Hello : ${this.isUserLoggedIn}`);
  }

}
