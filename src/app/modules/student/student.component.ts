import { Component, OnInit } from '@angular/core';
import { Integer } from 'aws-sdk/clients/apigateway';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  selectedCars: any[];

  constructor(public common:CommonService) 
  { }

  ngOnInit(): void {
    console.log();
  }

  addStudent(fname,lname,email,parentid): void {
  
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(parentid);
   // console.log(courses);
   console.log(this.selectedCars);
  }

  //  this.httpClient.get(this.lambda_notice_add+"?&content="+content+"&title="+title+"&expiry_date="+expiry_date,{responseType:'json'}).subscribe((data)=>{
  //  console.log();
  //  });;
}
