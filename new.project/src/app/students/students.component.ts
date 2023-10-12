import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
   StudentsListData : any;
   CourseMasterData:any;
   studentsFilter!:any;
   masterList: any;
   sortedArr : any;
  constructor(private getApi:ApicallService ,private toast:ToastrService, private router: Router){
    this.getApi.getAllStudents().subscribe((res)=> {
     this.StudentsListData=res; 
     this.masterList   =res;    
   })
   this.loadCourse()
}
loadCourse(){
  this.getApi.GetAllCourse().subscribe((res)=> {
    this.CourseMasterData=res; })
}
applyFilter(event: Event) {
 
  var filterValue= (event.target as HTMLInputElement).value;
  let filterValueLower = filterValue.toLowerCase();
  if(filterValue === '' ) {      
      this.StudentsListData=this.masterList;
  } else {
    
     this.StudentsListData = this.StudentsListData.filter((std:any) => 
     std.email.includes(filterValueLower) || 
     std.courseName.includes(filterValueLower) || 
     std.nameEn.toLowerCase().includes(filterValueLower) || 
     std.nameAr.toLowerCase().includes(filterValueLower) || 
     std.phoneNumber.toLowerCase().includes(filterValueLower));
}
}
navigatetoDelete(id:any)
{

 if(confirm("Are you sure to delete ? ")) {     
   this.getApi.DeleteStudents(id).subscribe((result)=> {    
     console.log(result);  
     if(result===1){
     this.toast.success('Sucsussfully deleted','Sucsess');
     
     }
     location.reload();
   })
  
 }
}
navigatetoEdit(id:any){

this.router.navigate(['/Students/editstudents',id])
}

transform(list:any[],column:string,filt:boolean): any[] {
 
  if(filt==true){
      let sortedArray =list.sort((a,b)=>{
        if(a[column] >b[column]){
          return 1;
        }
        if(a[column] <b[column]){
          return -1
        }
      return 0
    });
   return sortedArray;
}
else{
      let sortedArray =list.sort((b,a)=>{
        if(a[column] >b[column]){
          return 1;
        }
        if(a[column] <b[column]){
          return -1
        }
      return 0
    });
  return sortedArray;
}

}

sortAsc(key:any){

debugger;
  this.sortedArr = this.transform(this.StudentsListData, key,true);
  this.StudentsListData=this.sortedArr;
}
sortDsc(key:any){

debugger;
  this.sortedArr = this.transform(this.StudentsListData, key,false);
  this.StudentsListData=this.sortedArr;
}

navigatetoUnAssign(id:any)
{

 if(confirm("Are you sure to want Un Assign the Course ? ")) { 
  var inputData={
      studentsID:id,
      nameEn:'',
      nameAr:'',
      phoneNumber:'',
      email:'',
      age:'',
      address:'',
      city:'',
      courseID:0,
  
  }
  debugger;
   this.getApi.UnAssignCourse(inputData).subscribe((result:any)=> {    
     console.log(result);
     if(result){
     
        this.toast.success('Sucsussfully UnAssigned','Sucsess');
     }
     location.reload();
   })
  
 }
}
openModel(id:any){
  debugger;
  
  const modelDiv=(document.getElementById('myModal') as HTMLFormElement);
  if(modelDiv!=null){
    this.getApi.GetStudentsByID(id).subscribe((resut:any)=>{
      debugger;
      this.studentsFilter=resut;      
    })
    debugger;
    modelDiv.style.display='block';
  }


}
CloseModel(){

  const modelDiv=(document.getElementById('myModal') as HTMLFormElement);

  if(modelDiv!=null){
    modelDiv.style.display='none';
  }

}
navigatetoAssign()
{

  var inputData={
      studentsID:this.studentsFilter.studentsID, nameEn:'',nameAr:'',phoneNumber:'',email:'',age:'',address:'',city:'',courseID:this.studentsFilter.courseID,
  }
  debugger;
   this.getApi.AssignCourse(inputData).subscribe((result:any)=> {    

     if(result===1){
        this.toast.success('Sucsussfully Assigned','Sucsess');
     }
     else{
      this.toast.error('Failed to Update','error');
     }
     location.reload();
   })
  
 }

}
