import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router, ActivatedRoute } from '@angular/router';  
import { NgForm } from '@angular/forms';

import { BookingService } from '../shared/booking.service';
import { Booking } from'../shared/booking.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor(private bookingService : BookingService, private toastr : ToastrService, private http: HttpClient) { }

   book ={} ;
  ngOnInit() {
    this.bookingService.getAllBookings();
   // console.log("@@@@@@@@@@@@@@@@@@",this.bookingService.getAllBookings())
  }

 
  showForEdit(booking,id){
    this.book = booking;
   console.log("..........................",booking);
    console.log("this.book..........",this.book);
    // this.bookingService.selectedBooking = Object.assign({}, booking);
    
    console.log("up.............",booking)
   
  }

updat(form :NgForm){
  // console.log("..........................",id,"2222222",booking);
  // this.bookingService.putBooking(id,booking);
  this.bookingService.putBooking(form.value.id,form.value)
  .subscribe(data =>{
   
    this.bookingService.getAllBookings();
  })
}

  onDelete(id , booking){
    if (confirm('Are you sure to delete this recourd?') == true){
      this.bookingService.deleteBooking(id,booking)
      .subscribe(x => {
        this.bookingService.getAllBookings();
        this.toastr.warning("Deleted Successfully","Bookings Register")
      })
    }
  }
}
