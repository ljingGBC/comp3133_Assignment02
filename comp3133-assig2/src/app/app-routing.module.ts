import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './bookings/bookings.component';

import { ValidationguardGuard } from './validationguard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[ValidationguardGuard]
  },
  {
    path: 'hotels',
    component: HotelsComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
