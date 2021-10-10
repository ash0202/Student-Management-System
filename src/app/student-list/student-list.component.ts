import { Component, OnInit } from '@angular/core';
import { Attendance, StudentType } from 'src/model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList:Array<StudentType>=[]
  attendanceList:Array<Attendance>=[]
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.populateData();
  }
  populateData()
  {
    this.service.getAllStudents().subscribe((data) => {
      this.studentList = data
     })
  }
  deleteStudent(id?:number)
  {
    this.service.delete(id).subscribe((data)=>{
      this.populateData();
    })
  }
}
