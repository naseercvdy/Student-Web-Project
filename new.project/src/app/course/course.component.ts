import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';
import { ToastrService } from 'ngx-toastr';
import { SortPipe } from '../sort.pipe';

 
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  sortedArray:string ='';
  CourseListData : any;
  masterList : any;
  sortedArr : any;
  constructor(private getApi:ApicallService ,private toast:ToastrService, private router: Router){this.loadCourse()}
  loadCourse(){
    this.getApi.GetAllCourse().subscribe((res)=> {
      this.CourseListData=res;
      this.masterList=res;
    })
  }
  navigatetoEdit(id:any){

    this.router.navigate(['/course/edit-course',id])
  }
  navigatetoDelete(id:any)
  {
   
    if(confirm("Are you sure to delete ? ")) {     
      this.getApi.DeleteCourse(id).subscribe((result)=> {    
   
        if(result===1){
          this.toast.success('Sucsussfully deleted','Sucsess');
        }
        else{
            alert("Its already used in Students");
            this.toast.warning('Its already used in Students','Sucsess');
        }
          location.reload();
      })
     
    }
  }
  applyFilter(event: Event) {
 
    var filterValue= (event.target as HTMLInputElement).value;
    let filterValueLower = filterValue.toLowerCase();
    if(filterValue === '' ) {      
        this.CourseListData=this.masterList;
    } else {
      
       this.CourseListData = this.CourseListData.filter((std:any) => 
       std.courseName.toLowerCase().includes(filterValueLower) || 
       std.courseCode.toLowerCase().includes(filterValueLower) 
       );
  }
 }

 
 transform(list:any[],column:string,filt:boolean): any[] {
  debugger;
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
    this.sortedArr = this.transform(this.CourseListData, key,true);
    this.CourseListData=this.sortedArr;
}
sortDsc(key:any){
 
  debugger;
    this.sortedArr = this.transform(this.CourseListData, key,false);
    this.CourseListData=this.sortedArr;
}
}
