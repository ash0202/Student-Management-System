import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  userForm:FormGroup
  constructor(private service:StudentService,private router:Router) {
    this.userForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'branch': new FormControl('', Validators.required),
     
    })
  }

  ngOnInit(): void {
  }

  
  submitUser(){
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.service.saveUser(this.userForm.value).subscribe(() => {
        this.router.navigate(['/dashboard'])
      },() => {
        alert("Something Went Wrong")
      })
      
    }
  }
}
