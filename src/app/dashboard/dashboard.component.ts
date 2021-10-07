import { Component, OnInit } from '@angular/core';
import { StudentType } from 'src/model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  studentList:Array<StudentType>=[]
  constructor(private service:StudentService) { 
    console.log(this.studentList)
  }

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
