import { Component, OnInit } from '@angular/core';
import { Attendance } from 'src/model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-show-attendance',
  templateUrl: './show-attendance.component.html',
  styleUrls: ['./show-attendance.component.css']
})
export class ShowAttendanceComponent implements OnInit {

  attendance:Array<Attendance>=[]
  
  constructor(service:StudentService) {
    this.attendance=service.attendance
   // console.log(this.attendance)
   }

  ngOnInit(): void {
    
  }

}
