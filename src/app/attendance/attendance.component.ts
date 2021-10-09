import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Attendance, StudentType } from 'src/model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  attendance:Array<StudentType>=[]
  userForm:FormGroup
  
  constructor(private service:StudentService,private router:Router) { 
    this.userForm = new FormGroup({
      'studentId': new FormControl('', Validators.required),
      'date': new FormControl('', [Validators.required]),
      'present': new FormControl('', [Validators.required]),
     
    })
 
  }

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((data) => {
      this.attendance = data
      this.service.myAttendance=this.attendance
     })
  }
 submitAttendance()
 {
 if(this.userForm.valid){
    console.log(this.userForm.value);
    this.service.addAttendance(this.userForm.value).subscribe(() => {
      this.router.navigate(['/dashboard'])
    },() => {
      alert("Something Went Wrong")
    })
    
  }
 
 }
}
