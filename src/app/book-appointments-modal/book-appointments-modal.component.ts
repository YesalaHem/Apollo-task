import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointments-modal',
  templateUrl: './book-appointments-modal.component.html',
  styleUrls: ['./book-appointments-modal.component.css']
})
export class BookAppointmentsModalComponent implements OnInit {
@Input() mObj:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.mObj);
  }

}
