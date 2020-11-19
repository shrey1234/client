import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public httpClient:HttpClient) { }
  notices:any = [];

  public lambda_notice_fetch= environment.lambda_notice_fetch;

  ngOnInit(): void {
    this.getNotices();
  }

  public getNotices()
   {
      this.httpClient.get(this.lambda_notice_fetch,{responseType:'json'}).subscribe((data)=>{
      
       for (let index in data['Items']) {
        this.notices.push({content: data['Items'][index]['content'],expiry_date:data['Items'][index]['expiry_date'],title: data['Items'][index]['title']});
     }
     console.log(this.notices);
      });
  }

}
