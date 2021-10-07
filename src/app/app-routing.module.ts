import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { SearchAttendanceComponent } from './search-attendance/search-attendance.component';
import { ShowAttendanceComponent } from './show-attendance/show-attendance.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"create-student",
    component:CreateStudentComponent
  },
  {
    path:"edit-student/:id",
    component:EditStudentComponent
  },
  {
    path:"delete-student",
    component:DeleteStudentComponent
  },
  {
    path:"attendance",
    component:AttendanceComponent,
   
  },
  {
    path:"search-attendance",
    component:SearchAttendanceComponent,
  },
  {
    path:"show-attendance",
    component:ShowAttendanceComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
