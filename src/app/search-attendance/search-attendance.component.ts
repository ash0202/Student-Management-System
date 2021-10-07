import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendance } from 'src/model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-search-attendance',
  templateUrl: './search-attendance.component.html',
  styleUrls: ['./search-attendance.component.css']
})
export class SearchAttendanceComponent implements OnInit {

  
  userForm:FormGroup
  id:number=0
  constructor(private service:StudentService,private router:Router,private activeRouter:ActivatedRoute) { 
    this.userForm = new FormGroup({
      'id': new FormControl('', Validators.required),           
    })
  }

  ngOnInit(): void {
   
  
  }
searchAttendance()
{
  this.service.searchAttendance().subscribe((data) => {
    this.service.attendance = data
    this.router.navigate(['show-attendance'])
   })
  // console.log(this.service.attendance)

    
  
}
getId(id:string)
{
  this.id=parseInt(id)
}

}
