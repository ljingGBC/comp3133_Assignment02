import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelsComponent } from './hotels/hotels.component';
import { HomeComponent } from './home/home.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
