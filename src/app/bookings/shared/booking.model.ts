export class Booking {
    BookingId :number;
    Name : string;
    Mobile : string;
    TreatmentId: number;
    TimeSlotId :number;
    Note : string;
    Email : string;
    BookedDate : Date;
    IsDeleted : boolean;
    TimeSlots : LU_TimeSlot;
    Treatments : LU_Treatment;
}

export class LU_TimeSlot{
   TimeSlotId : number;
   TimeSlotTitle : number;

}

export class LU_Treatment{
   TreatmentId : number;
   TreatmentTitle : string;
   TreatmentDescription : string;
}