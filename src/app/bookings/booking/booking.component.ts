import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http'; 
import { Router, ActivatedRoute, Route } from '@angular/router';  

import { BookingService } from '../shared/booking.service';
import { BookingListComponent } from '../booking-list/booking-list.component';
import { ToastrService } from 'ngx-toastr';

import {Booking} from'../shared/booking.model'



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers:[BookingService]
})
export class BookingComponent implements OnInit {

  constructor(private  bookingService : BookingService, private http: Http, private toastr: ToastrService ,private httpClient: HttpClient , private _router: Router) { }
  
  public tList = [];
  public treatList = [];
   successfulSave : boolean;
   errors: string[];

  ngOnInit() {
  this.resetForm();
  //this.onSubmit();
  this.bookingService.getAllBookings();
  
  //this.bookingService.getTimeSlots();
  this.bookingService.getTime().subscribe(data => {
    console.log("data ..........",data)
    this.tList = data;
  })

   //this.bookingService.getTreatment();
   this.bookingService.getTreat().subscribe(data => {
    console.log("data ..........",data)
    this.treatList = data;
  })

console.log(" this.bookingService.getTime ----", this.bookingService.getTime())

  this.bookingService.getTreatment();
 
  }
resetForm(form?: NgForm){
if(form != null)
   form.reset();
   this.bookingService.selectedBooking = {
     BookingId:null,
     Name:'',
     Email:'',
     IsDeleted:false,
     Note:'',
     Mobile:'',
     BookedDate:null,
     TimeSlotId:null,
     TreatmentId:null,
     TimeSlots:null,
     Treatments:null
    }
  }
  onSubmit(form :NgForm){
    if(form.value.BookingId == null){
      this.bookingService.postBooking(form.value)
      .subscribe(data =>{
        this.resetForm(form);
        this.bookingService.getAllBookings();
        this.toastr.success('new Record Added Successsfully','Bookings done')
      })
      
    }
    else{
      console.log()
      this.bookingService.putBooking(form.value.BookingId, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.bookingService.getBookingById(form.value.BookingId);

        this.toastr.info('Record Updated Successfully!', 'Update Done');
      });
    }
  }
 
}
