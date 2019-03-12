import { Component } from '@angular/core';
import { BookingService } from './bookings/shared/booking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BookingService]
})
export class AppComponent {
  title = 'app';
}
