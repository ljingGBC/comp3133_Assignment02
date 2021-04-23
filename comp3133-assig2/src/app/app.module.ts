import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


import { FormsModule } from '@angular/forms';
import { HotelsComponent } from './hotels/hotels.component';
import { BookingsComponent } from './bookings/bookings.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsComponent,
    BookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
