import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userForm: FormGroup;
  userDetails:any;

  constructor(private router:Router , private fb:FormBuilder , private http:HttpClient ) {

   }

  ngOnInit(): void {
    this.initForm();
    fetch('http://localhost:8000/userData').then(data=>{
      return data.json();
    }).then(res=>{
      this.userDetails = res;
      
    })
  }

  initForm(){
    this.userForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      number:['',Validators.required],
    });
  }

  userSubmit(){
    
    if(this.userForm.valid){
      if(this.userDetails.findIndex((a:any)=> a.name === this.userForm.value.name) >=0 ){   
        this.router.navigate(['success']);
      }else{
        let random = Math.floor(Math.random()* 1000);
        const obj = {
          name:this.userForm.value.name,
          email:this.userForm.value.email,
          number: this.userForm.value.number,
          id:random
        }
        this.http.post('http://localhost:8000/userData', obj).subscribe(res=>{
          console.log(res);
        })
          this.router.navigate(['doctors']);
      }
    }
  }

}
