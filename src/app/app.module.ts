import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookAppointmentsModalComponent } from './book-appointments-modal/book-appointments-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorsComponent,
    BookAppointmentsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
