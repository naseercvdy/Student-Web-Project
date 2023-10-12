import { Component } from '@angular/core';
import { ApicallService } from '../../apicall.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.css']
})
export class NewStudentsComponent {
  CourseMasterData : any;
 
  students:any =[{
    nameEn:'',
    nameAr:'',
    phoneNumber:'',
    email:'',
    age:'',
    address:'',
    city:''
  }];
  constructor(private getApi:ApicallService ,private toast:ToastrService ,private router:Router){
    this.loadCourse();
  }
 loadCourse(){
    this.getApi.GetAllCourse().subscribe((res)=> {
      this.CourseMasterData=res; })
  }
  
  onSubmitStudent() {
    var inputData={
      nameEn:this.students.nameEn,
      nameAr:this.students.nameAr,
      phoneNumber:this.students.phoneNumber,
      email:this.students.email,
      age:this.students.age,
      address:this.students.address,
      city:this.students.city,
      courseID:this.students.courseID,
 
    }
    this.getApi.SaveStudentInfo(inputData).subscribe((res:any) =>{
      this.toast.success('Sucsussfully Added','Sucsess');
     
      if(res===1){
        this.router.navigate(['/Students'])
      }
    })

  }
}
