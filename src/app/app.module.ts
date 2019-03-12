import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';
//import {ModuleRouting} from './app.routing';

import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingComponent } from './bookings/booking/booking.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    BookingComponent,
    BookingListComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([  
      { path: '', redirectTo: 'home', pathMatch: 'full' },  
      { path: 'home', component: BookingsComponent },  
      { path: 'fetch-Bookings', component: BookingListComponent },  
      { path: 'register-Booking', component: BookingComponent },  
      { path: 'employee/edit/:id', component: BookingComponent },  
      { path: '**', redirectTo: 'home' }  
  ])  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
