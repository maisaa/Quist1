import { Component, OnInit } from '@angular/core';

import { BookingService } from './shared/booking.service';
import {Booking} from'./shared/booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  providers:[BookingService]
})
export class BookingsComponent implements OnInit {

  constructor(private bookingService  : BookingService) { }

  ngOnInit() {
  }

}
