import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addNotice(title,content,expiry_date): void {
    console.log("call lambda "+title);
    console.log("call lambda "+content);
    console.log("call lambda "+expiry_date);
 }

}
