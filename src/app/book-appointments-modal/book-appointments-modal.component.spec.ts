import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppointmentsModalComponent } from './book-appointments-modal.component';

describe('BookAppointmentsModalComponent', () => {
  let component: BookAppointmentsModalComponent;
  let fixture: ComponentFixture<BookAppointmentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAppointmentsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAppointmentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
