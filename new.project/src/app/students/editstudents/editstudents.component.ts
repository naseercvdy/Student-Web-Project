import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-editstudents',
  templateUrl: './editstudents.component.html',
  styleUrls: ['./editstudents.component.css']
})
export class EditstudentsComponent {

  students!:any;
  CourseMasterData:any;
  constructor(private getApi:ApicallService,private toast:ToastrService ,private router:Router,private Activatedroute:ActivatedRoute){
    this.loadCourse();
    this.getApi.GetStudentsByID(this.Activatedroute.snapshot.paramMap.get('id')).subscribe((resut:any)=>{
      debugger;
      this.students=resut;
      console.log(this.students);
    })

}
loadCourse(){
  this.getApi.GetAllCourse().subscribe((res)=> {
    this.CourseMasterData=res; })
}

OnEditStudents(){

  var inputData={
    nameEn:this.students.nameEn,
    nameAr:this.students.nameAr,
    phoneNumber:this.students.phoneNumber,
    email:this.students.email,
    age:this.students.age,
    address:this.students.address,
    city:this.students.city,
    courseID:this.students.courseID,
    studentsID:this.Activatedroute.snapshot.paramMap.get('id')
  }
  this.getApi.UpdateStudents(inputData).subscribe((res:any) =>{

   
    if(res===1){
      this.toast.success('Sucsussfully Edited','Sucsess');
      this.router.navigate(['/Students'])
    }
  })

}

}
