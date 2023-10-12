import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { NewCourseComponent } from './course/new-course/new-course.component';
import { NewStudentsComponent } from './students/new-students/new-students.component';
import { EditCourseComponent } from './course/edit-course/edit-course.component';
import { EditstudentsComponent } from './students/editstudents/editstudents.component';
import { StudentsComponent } from './students/students.component';
 


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Students',component:StudentsComponent},
  {path:'course',component:CourseComponent},
  {path:'course/new-course',component:NewCourseComponent},
  {path:'Students/new-students',component:NewStudentsComponent},
  {path:'course/edit-course/:id',component:EditCourseComponent},
  {path:'Students/editstudents/:id',component:EditstudentsComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
