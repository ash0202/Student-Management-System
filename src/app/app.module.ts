import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SearchAttendanceComponent } from './search-attendance/search-attendance.component';
import { ShowAttendanceComponent } from './show-attendance/show-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    CreateStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    AttendanceComponent,
    SearchAttendanceComponent,
    ShowAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
