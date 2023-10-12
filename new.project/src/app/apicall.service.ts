import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }
  getAllStudents(){
 
    return this.http.get<any>('https://localhost:7086/api/StudentsView/');
  }
  SaveCourseInfo(course:any){
    return this.http.post<String>('https://localhost:7086/api/CourseApi',course);
  }
  GetAllCourse(){
    return this.http.get<any>('https://localhost:7086/api/CourseApi/');
  }
  GetCourseByID(id:any){
 
    return this.http.get<any>('https://localhost:7086/api/CourseApi/'+id);
  }
  DeleteCourse(id:any){
    
    return this.http.delete<any>('https://localhost:7086/api/CourseApi?id='+id);
  }
  SaveStudentInfo(students:object){
    return this.http.post<String>('https://localhost:7086/api/StudentsApi',students);
  }
  DeleteStudents(id:any){
    
    return this.http.delete<any>('https://localhost:7086/api/StudentsApi?id='+id);
  }
  UpdateCourse(course:object){
    return this.http.put<String>('https://localhost:7086/api/CourseApi',course);
  }
  GetStudentsByID(id:any){
 
    return this.http.get<any>('https://localhost:7086/api/StudentsApi/'+id);
  }
  UpdateStudents(course:object){
    return this.http.put<String>('https://localhost:7086/api/StudentsApi',course);
  }
  UnAssignCourse(students:object){
    return this.http.put<String>('https://localhost:7086/api/StudentsApi/UnAssignCourse',students);
  }
  AssignCourse(students:object){
    return this.http.put<String>('https://localhost:7086/api/StudentsApi/AssignCourse',students);
  }
}
