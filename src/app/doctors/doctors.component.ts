import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookAppointmentsModalComponent } from '../book-appointments-modal/book-appointments-modal.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctorsList = [
    {
      name:"Dr.Mark",
      specialist :"Cardiaology",
      image:'../../assets/doctors/1 doc.jpeg',
      fee:750,
      timings :[
        "5:00 PM" ,"5:20 PM" , "5:40 PM" ,"6:00 PM" 
      ]
    },
    {
      name:"Dr.Watney",
      specialist :"Genral surgon",
      image:'../../assets/doctors/1 doc.jpeg',
      fee:700,
      timings :[
        "4:00 PM" ,"4:20 PM" , "4:40 PM" ,"5:00 PM" 
      ]
      
    },
    {
      name:"Dr.Rose Willson",
      specialist :"Laboratory Medicine",
      image:'../../assets/doctors/1 doc.jpeg',
      fee:800,
      timings :[
        "3:00 PM" ,"3:20 PM" , "3:40 PM" ,"4:00 PM" 
      ]

    },
    {
      name:"Dr.John Mike",
      specialist :"Liver trasplant",
      image:'../../assets/doctors/1 doc.jpeg',
      fee:1300,
      timings :[
        "7:00 PM" ,"7:20 PM" , "7:40 PM" ,"8:00 PM" 
      ]

    }
  ]

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }
  book(index:number){

    const modalRef =  this.modal.open(BookAppointmentsModalComponent);
    modalRef.componentInstance.mObj = this.doctorsList[index]
  }
}
