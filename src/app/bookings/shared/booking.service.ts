import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
import {Booking , LU_TimeSlot, LU_Treatment } from'./booking.model'

@Injectable()
export class BookingService {

  selectedBooking : Booking;
  bookingList : Booking[];


  selectedTimeSlot : LU_TimeSlot;
  timeSlotList : LU_TimeSlot[];

  selectedTreatment : LU_Treatment;
  treatmenttList : LU_Treatment[];

  constructor(private http : Http ,private httpClient: HttpClient) { }
 
  postBooking(b : Booking){
   var body = JSON.stringify(b);
//    var body =  {
    
//     "name": "Mama",
//     "mobile": "0796557979",
//     "treatmentId": 2,
//     "timeSlotId": 3,
//     "note": "XD",
//     "email": "esraa@gmail.com",
//     "bookedDate": "2018-04-24T00:00:00",
//     "isDeleted": true,
    
// }
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:61182/api/Bookingsm',body,requestOptions).map(x => x);
  }
//......................................................
//Get All Bookings
getAllBookings(){
  
  // this.http.get('http://localhost:61182/api/Bookingsm')
  // .map((data:Response) => {
  //   console.log(".............."+data.json());
  //   return data.json() as Booking[];
  // }).toPromise().then(x => {
  //   this.bookingList = x;
  // })
  console.log("GET All Bookings ");
  const endpoint = `http://localhost:61182/api/Bookingsm`;
  this.http.get(endpoint).subscribe(b =>{  
    console.log("Booking........All............",b.json());

    this.bookingList = b.json()
  });
  console.log("GET All Bookings ");
}
//......................................................
//Get All Bookings
getBookingById(id){
 
  console.log("GET Booking By ID");
  const endpoint = `http://localhost:61182/api/Bookingsm/`+id;
  this.http.get(endpoint).subscribe(b =>{
    console.log("get by id  Aya................",b);
    this.selectedBooking = b.json()});
   
}
 

//...............................................................
//Get TimeSlots Observable
getTime():Observable<LU_TimeSlot[]>{
return this.httpClient.get<LU_TimeSlot[]>('http://localhost:61182/api/Bookingsm/time/');
}
//...............................................................
//Get Tretments Observable
getTreat():Observable<LU_Treatment[]>{
  return this.httpClient.get<LU_Treatment[]>('http://localhost:61182/api/Bookingsm/treatment');
  }
//....................................................






//....................................................
//Get TimeSlots
getTimeSlots(){
  this.http.get('http://localhost:61182/api/Bookingsm/time')
  .map((data:Response) => {
    console.log("..............",data.json());
    return data.json() as LU_TimeSlot[];
  }).toPromise().then(x => {
    console.log("timeSlotList....................",x)
    this.timeSlotList = x;
  })
}
//....................................................
//Get Treatments
getTreatment(){
  this.http.get('http://localhost:61182/api/Bookingsm/treatment')
  .map((data:Response) => {
    
    return data.json() as LU_Treatment[];
  }).toPromise().then(x => {
    console.log("..............",x);
    this.treatmenttList = x;
  })
}
//.......................................................
// update Booking
putBooking(id, booking){
  console.log("update....0000.....",booking)
  var body = JSON.stringify(booking);
  var headerOptions = new Headers({'Content-Type':'application/json'});
  var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
  return this.http.post('http://localhost:61182/api/Bookingsm/put/'+id,body,requestOptions).map(x => x);

}
//.......................................................
// delete Booking
deleteBooking(id, booking){
  console.log(".....id......",id);
  var body = JSON.stringify(booking);
  var headerOptions = new Headers({'Content-Type':'application/json'});
  var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
  return this.http.post('http://localhost:61182/api/Bookingsm/delete/'+id,body,requestOptions).map(x => x);

}



}

