import { Injectable } from '@angular/core';
import { StudentType } from 'src/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  studentData:Array<StudentType>=[]
  constructor(private http:HttpClient) { }

  getAllStudents()
  {
    return this.http.get<Array<StudentType>>(`https://615ea2fe3d1491001755aa19.mockapi.io/api/students`)
  }
}
