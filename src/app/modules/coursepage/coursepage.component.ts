import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.css']
})
export class CoursepageComponent implements OnInit {

  id;
  sub;
  public role="";

public lambda_course_assign_url =environment.lambda_course_assign_url

 assignment:any = [];
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,private httpClient: HttpClient) {
      this.role=localStorage.getItem('role')

     }
    
  ngOnInit(): void {
    httpClient: HttpClient;

    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       this.id = params.get('id'); 
       console.log(this.id);
       this.getAssignmentList();
      
   });
  }
  public getAssignmentList()
   {
      this.httpClient.get(this.lambda_course_assign_url+this.id,{responseType:'json'}).subscribe((data)=>{
       console.log(data);
       for (let index in data) {
       
          this.assignment.push({due_date: data[index]['due_date'],url:data[index]['url'],Assignment_name: data[index]['Assignment_name']});

       }
       console.log(this.assignment);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  onBack(): void {
     this._router.navigate(['course']);
  }

}
