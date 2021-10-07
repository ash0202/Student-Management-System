import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentType } from 'src/model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id:number=0;
  userForm:FormGroup;


  constructor(private activeRouter:ActivatedRoute, private service:StudentService,private router:Router) {
    this.userForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'branch': new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.service.getStudentById(paramsData.id).subscribe((data) => {
        console.log(data)
       delete data.id
        this.userForm.setValue(data)
      })
    })

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
      this.service.updateUser(this.id,this.userForm.value).subscribe(() => {
        this.router.navigate(['/dashboard'])
      },() => {
        alert("Something Went Wrong")
      })
      
    }
  }
}
