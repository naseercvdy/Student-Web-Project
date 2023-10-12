import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewCourseComponent } from './course/new-course/new-course.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { EditstudentsComponent } from './students/editstudents/editstudents.component';
import { NewStudentsComponent } from './students/new-students/new-students.component';
import { StudentsComponent } from './students/students.component';
 
 



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HomeComponent,
    NewCourseComponent,
    NewStudentsComponent,
    EditCourseComponent,
    EditstudentsComponent,
    StudentsComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({ timeOut: 2000, enableHtml: true }),
    BrowserAnimationsModule,
    
    
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
