import { Component } from '@angular/core';
import { ApicallService } from '../../apicall.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {
    course:any =[{
      courseCode:'',
      courseName:'',
    }];
  constructor(private postApi:ApicallService,private toast:ToastrService ,private router:Router) {


  }
  
 onSubmit() {
      var inputData={
        courseCode:this.course.courseCode,
        courseName:this.course.courseName,
     
      } 
      this.postApi.SaveCourseInfo(inputData).subscribe((res:any) =>{
     
       
        if(res===1){
          this.toast.success('Sucsussfully Added','Sucsess');
          this.router.navigate(['/course'])
        }
      })

    }
}
