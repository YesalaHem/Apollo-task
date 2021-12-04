import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-appointments-modal',
  templateUrl: './book-appointments-modal.component.html',
  styleUrls: ['./book-appointments-modal.component.css']
})
export class BookAppointmentsModalComponent implements OnInit {
@Input() mObj:any;
  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.mObj);
  }

  selctedTime(index:any){
    this.activeModal.close(index);
  }
}
