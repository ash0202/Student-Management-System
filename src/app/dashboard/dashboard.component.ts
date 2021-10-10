import { Component, OnInit } from '@angular/core';
import { Attendance, StudentType } from 'src/model';
import { StudentService } from '../student.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  studentList:Array<StudentType>=[]
  attendanceList:Array<Attendance>=[]
   map=new Map()
  dt:string=""
  xvalues:Array<string>=[]
  yvalues:Array<number>=[]
  color="rgba(0, 123, 255,0.2)"
  borderColor='rgba(0, 123, 255,1)'
  constructor(private service:StudentService) { 
   // console.log(this.studentList)
  }

  ngOnInit(): void {
    
    
    
    this.service.searchAttendance().subscribe((data)=>{
      this.attendanceList=data
      //console.log(this.attendanceList)
      this.attendanceList.forEach((data)=>{
        this.dt=data.date.toString()
       if(this.map.has(this.dt))
       {
          this.map.set(this.dt,this.map.get(this.dt)+1)
       }
       else
       {
         this.map.set(this.dt,1);
       }
      })
     // console.log(this.map.keys())
      for(let item of this.map.keys())
        this.xvalues.push(item)
     
      for(let item of this.map.values())
        this.yvalues.push(item)

    })
  /*  new Chart("mychart",{
      type: "bar",
      data: {
        labels: this.xvalues,
        datasets: [{
          backgroundColor: this.color,
          data: this.yvalues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "Attendance"
        }
      }
    });*/
    new Chart("mychart", {
      type: 'bar',
      data: {
          labels: this.xvalues,
          datasets: [{
              label: 'No of students present',
              data: this.yvalues,
              backgroundColor: this.color,
              borderColor: this.borderColor,
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
     
        title: {
          display: true,
          text: "Attendance"
        },
          scales: {
            yAxes: [{
              ticks: {
                  beginAtZero: true,
                  precision:0
              },
              gridLines: {
                display: false
              }                           
            }         
          ]
          }
      }
  });
  this.populateData();
 window.dispatchEvent(new Event('resize'));
 window.resizeTo(250, 250);
  window.focus();
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
