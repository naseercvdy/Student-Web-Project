import { Component,ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})

export class EditCourseComponent {
 
  course!:any;
  Erorrs:any =[];
  
  constructor(private getApi:ApicallService,private toast:ToastrService ,private router:Router,private Activatedroute:ActivatedRoute){

    this.getApi.GetCourseByID(this.Activatedroute.snapshot.paramMap.get('id')).subscribe((resut:any)=>{
      debugger;
      this.course=resut;
      console.log(this.course);

    })
    
  }
  
  OnEdiCourse(){

    var inputData={
      courseCode:this.course.courseCode,
      courseName:this.course.courseName,
      courseID:this.Activatedroute.snapshot.paramMap.get('id')
    }
    this.getApi.UpdateCourse(inputData).subscribe((res:any) =>{
      this.toast.success('Sucsussfully Edited','Sucsess');
     
      if(res===1){
        this.router.navigate(['/course'])
      }
    })
  
  }
}
