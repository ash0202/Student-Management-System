import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance, StudentType } from 'src/model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentData:Array<StudentType>=[]
  attendance:Array<Attendance>=[]
  myAttendance:Array<StudentType>=[]
//  static attendance: Attendance[];
  constructor(private http:HttpClient) { }

  getAllStudents()
  {
    return this.http.get<Array<StudentType>>(`https://615ea2fe3d1491001755aa19.mockapi.io/students`)
  }
  saveUser(student:StudentType){
   
    return this.http.post(`https://615ea2fe3d1491001755aa19.mockapi.io/students`,student)
  }
  delete(id?:number)
  {
   return this.http.delete(`https://615ea2fe3d1491001755aa19.mockapi.io/students/${id}`)
  }
  getStudentById(id:number)
  {
    return this.http.get<StudentType>(`https://615ea2fe3d1491001755aa19.mockapi.io/students/${id}`)
  }
  updateUser(id:number,stud:StudentType)
  {
    return this.http.put(`https://615ea2fe3d1491001755aa19.mockapi.io/students/${id}`,stud)
  }
  addAttendance(attendance:Attendance)
  {
    return this.http.post(`https://615ea2fe3d1491001755aa19.mockapi.io/attendance`,attendance)
  }
  searchAttendance()
  {
    return this.http.get<Array<Attendance>>(`https://615ea2fe3d1491001755aa19.mockapi.io/attendance`)
  }
}
