import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookAppointmentsModalComponent } from '../book-appointments-modal/book-appointments-modal.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctorsList:any;

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
    fetch('http://localhost:9000/doctorsList').then(data=>{
      return data.json();
    }).then(res=>{
      console.log(res);
      this.doctorsList = res;
    });
  }
  book(index:number){
    const modalRef =  this.modal.open(BookAppointmentsModalComponent);
    modalRef.componentInstance.mObj = this.doctorsList[index];
    modalRef.result.then((data)=>{
      console.log(data);
    })
  }
}
