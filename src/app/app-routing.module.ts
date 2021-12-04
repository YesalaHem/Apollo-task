import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'doctors', component:DoctorsComponent
  },
  {
    path:'success', component:SuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
