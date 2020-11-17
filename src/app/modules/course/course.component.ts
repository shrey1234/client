import { Component, OnInit } from '@angular/core';
import { DataService} from '../../data.service';
import {HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  public lambda_courses_url =environment.lambda_courses_url
  public course_string: string='';
  public username="";

  public subjectArray: {[key: string]: string} = {
    M1: 'Mathematics_1',
    M2: 'Mathematics_2',
    M3: 'Mathematics_3',

    C1: 'Computers_1',
    C2: 'Computers_2',
    C3: 'Computers_3',

    H1: 'Hindi_1',
    H2: 'Hindi_2',
    H3: 'Hindi_3',

    S1: 'Science_1',
    S2: 'Science_2',
    S3: 'Science_3',

}

course_list:any = [];


  constructor(private httpClient: HttpClient) { 
    this.username=localStorage.getItem('username')
  }
  ngOnInit(): void {
    this.getCourses();

  }
  public getCourses()
  {
     this.httpClient.get(this.lambda_courses_url+this.username,{responseType:'json'}).subscribe((data)=>{
     this.course_string=data.toString();
     console.log(this.course_string);
     this.course_string.split(',').map(subject=>
        {
            this.course_list.push({key:subject,value: this.subjectArray[subject]});
            console.log("courselist new "+ this.course_list);
        });
     });
     console.log("courselist new "+ this.course_list);
 }

}
